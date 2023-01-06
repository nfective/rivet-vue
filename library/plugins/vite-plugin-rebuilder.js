import fs from 'fs'
import * as path from 'path'
import chokidar from 'chokidar'
import cleanBuild from './../builds-scripts/clean-up.js'
import { componentsLoader, componentRemover, componentLoader } from './../builds-scripts/component-loader.js'
import { execSync } from 'child_process'

const cwd = process.cwd().replaceAll('\\', '/')

// Flag to tell that the esm file had been rebuilt in the add watcher and not to re-rerun the build in the unlink watcher
let should_rebuild

let watched_directories
let watcher
// object of components where the 
let components

const loadComponents = (directories, component_prefixes, component_extensions) => {

    components = componentsLoader(directories, component_prefixes, component_extensions)

    buildEntryFile(components)
}

const loadComponent = (component_path, component_prefixes, component_extensions) => {

    // Prevents rebuilding of component file if no changes were made
    const old_components = JSON.stringify(components)

    components = componentLoader(components, component_path, component_prefixes, component_extensions)

    if(old_components === JSON.stringify(components)) return

    buildEntryFile(components)
}

const removeComponent = (component_path) => {

    components = componentRemover(components, component_path)

    buildEntryFile(components)
}

const buildEntryFile = (components) => {

    let entry_file_content = ''

    for(const [key, value] of Object.entries(components))
    {
        entry_file_content += `${ value }\r\n`
    }

    entry_file_content += `\r\nexport default {
\tinstall: (app, options) => {\r\n`

    for(const [key, value] of Object.entries(components))
    {
        entry_file_content += `\t\tapp.component('${ key }', ${ key })\r\n`
    }

    entry_file_content += '\t}\r\n}'

    fs.writeFileSync(`${ cwd }/src/index.js`, entry_file_content)
}

const rebuild = () => execSync('npm run build', (error, message) => { if(error) console.log(error) })

const rebuilder = (configs) => {
    // Do we need dist or just index.js with install?
    return {
        configureServer(server) {
            try
            {

                cleanBuild()

                configs = JSON.parse(JSON.stringify(configs))
                
                const start = performance.now()

                // Function is slow 
                loadComponents(configs.watched_directories, ['Rvt'], ['vue'])

                rebuild()
                const stop = performance.now()

                console.log(`Took ${ ((stop - start) / 1000).toFixed(3) }s to load components`)

                watched_directories = configs.watched_directories.map(directory => directory.replaceAll('\\', '/'))

                watcher = chokidar.watch(watched_directories, { ignoreInitial: true })
                watcher
                    // Doesn't trigger on addition directory
                    .on('add', (path) => {
                        const start = performance.now()
                        try
                        {
                            components = loadComponent(`${ cwd }/${ path.replaceAll('\\', '/') }`)

                            rebuild()
                            should_rebuild = false
                        }
                        catch
                        {
                            server.restart()
                        }
                        const stop = performance.now()
                        console.log(`Took ${ ((stop - start) / 1000).toFixed(3) }s to load components`)
                    })
                    // Doesn't trigger on removing directory
                    .on('unlink', (path) => {

                        // Flip flag once logic is executed
                        if(should_rebuild === false) return should_rebuild = true

                        const start = performance.now()
                        removeComponent(`${ cwd }/${ path.replaceAll('\\', '/') }`)
                        rebuild()

                        const stop = performance.now()
                        console.log(`Took ${ ((stop - start) / 1000).toFixed(3) }s to load components`)
                    })
            }
            catch
            {
            }
        }
    }
}

export default rebuilder