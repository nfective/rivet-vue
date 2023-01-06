import fs from 'fs'
import * as path from 'path'
import chokidar from 'chokidar'
import cleanBuild from './../builds-scripts/clean-up.js'
import { componentsLoader, componentRemover, componentLoader } from './../builds-scripts/component-loader.js'
import { execSync } from 'child_process'

const cwd = process.cwd().replaceAll('\\', '/')

// When a file is moved, the add watcher fires, then the unlink watcher fire immediately after.
// To prevent creating an incorrect index.js, a setTimeout is used
let file_timeout = false

// Flag is a debounced timer to prevent rapid rebuilding. To produce a
// a esm build it takes around 1.5s at the moment, rapid changes would
// overwhelm the system
let debounce_rebuild

let watched_directories
let watcher
// object of components where the 
let components

const loadComponents = async (directories, component_prefixes, component_extensions) => {
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

// Debounce rebuild to prevent rapid execution of vite build which could
// result in an incorrect state
const rebuild = () => {

    if(debounce_rebuild)
    {
        clearTimeout(debounce_rebuild)
        debounce_rebuild = setTimeout(() => {
            execSync('npm run build', (error, message) => { if(error) console.log(error) })
            debounce_rebuild = null
        }, 500)
    }
    else
    {
        debounce_rebuild = setTimeout(() => {
            debounce_rebuild = null
        }, 500)
        execSync('npm run build', (error, message) => { if(error) console.log(error) })
    }
}

const rebuilder = async (configs) => {
    // Do we need dist or just index.js with install?
    return {
        configureServer(server) {
            try
            {

                cleanBuild()

                configs = JSON.parse(JSON.stringify(configs))

                // Function is slow 
                loadComponents(configs.watched_directories, ['Rvt'], ['vue'])

                rebuild()

                watched_directories = configs.watched_directories.map(directory => directory.replaceAll('\\', '/'))

                watcher = chokidar.watch(watched_directories, { ignoreInitial: true })
                watcher
                    // Doesn't trigger on addition directory
                    .on('add', async (path) => {
                        file_timeout = true
                        setTimeout(() => {
                            file_timeout = false
                        }, 200)

                        try
                        {
                            loadComponent(`${ cwd }/${ path.replaceAll('\\', '/') }`)
                            rebuild()
                        }
                        catch
                        {
                            server.restart()
                        }
                    })
                    .on('change', (path) => {
                        console.log("Change Called")
                        rebuild()
                    })
                    // Doesn't trigger on removing directory
                    .on('unlink', (path) => {
                        console.log("Unlink Called")
                        // After a file is added, there is a timeout period 
                        if(!file_timeout) {
                            removeComponent(`${ cwd }/${ path.replaceAll('\\', '/') }`)
                            rebuild()
                        }
                    })
            }
            catch
            {
            }
        }
    }
}

export default rebuilder