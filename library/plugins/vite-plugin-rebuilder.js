import fs, { watch } from 'fs'
import * as path from 'path'
import chokidar from 'chokidar'
import cleanBuild from './../builds-scripts/clean-up.js'
import { componentsLoader, componentRemover, componentLoader } from './../builds-scripts/component-loader.js'
import { execSync } from 'child_process'

const cwd = process.cwd().replaceAll('\\', '/')

let watched_directories
let watcher
// object of components where the 
let components

const loadComponents = (directories, component_prefixes, component_extensions) => {

    components = componentsLoader(directories, component_prefixes, component_extensions)

    buildEntryFile(components)
}

const loadComponent = (component_path, component_prefixes, component_extensions) => {

    components = componentLoader(components, component_path, component_prefixes, component_extensions)

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

                watched_directories = configs.watched_directories.map(directory => directory.replaceAll('\\', '/'))
                
                loadComponents(configs.watched_directories, ['Rvt'], ['vue'])

                rebuild()

                watcher = chokidar.watch(watched_directories, { ignoreInitial: true })
                watcher
                    // Attempt to remove component before adding it again
                    .on('add', (path) => {
                        console.log("Add")
                        const start = performance.now()
                        loadComponent(`${ cwd }/${ path.replaceAll('\\', '/') }`)
                        rebuild()

                        const stop = performance.now()

                        console.log(`${ (stop - start).toFixed(3) }ms`)
                    })
                    .on('unlink', (path) => {
                        console.log("Unlink")
                        const start = performance.now()
                        removeComponent(`${ cwd }/${ path.replaceAll('\\', '/') }`)
                        rebuild()
                        const stop = performance.now()

                        console.log(`${ (stop - start).toFixed(3) }ms`)
                    })
                    // Because an add can be considered an change, only watch for change
            }
            catch
            {
            }
        }
    }
}

export default rebuilder