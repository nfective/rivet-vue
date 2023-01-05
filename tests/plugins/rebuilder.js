// The plugin runs the `npm run build:library` or `npm run build:va-library`
// when a component file changes so that npm link dependencies that get the
// latest version of the component and vite and hmr reload the component file

import * as path from 'path'
import chokidar from 'chokidar'
import { exec } from 'child_process'
import { watch } from 'fs'
const cwd = process.cwd().replaceAll('\\', '/')

const rebuildLibrary = (parameters) => {
    console.log("Library changed")
    // exec(`npm unlink rivet-vue`, (err, output) => console.log(err))
    // exec(`npm link rivet-vue`, (err, output) => console.log(err))
    exec(`cd ../${ parameters.linked_project } & npm run build:library`, (error, output) => { console.log(error) })
    exec(`npm link rivet-vue`, (err, output) => console.log(err))
}

const rebuilder = (parameters) => {
    return {
        configureServer(server) {

            parameters = JSON.parse(JSON.stringify(parameters))

            let timeout

            const debounce = (func, delay) => {
                if(timeout) console.log("Request ignored")
                if(timeout) return
                timeout = true
                console.log(timeout)
                func()
                setTimeout(() => {
                    timeout = false
                    console.log('Reattaching watcher')
                    setWatchers()
                }, delay)
            }
            
            let watcher = null

            const setWatchers = () => {
                if(!watcher) {
                    watcher = chokidar.watch('../library/src', { ignoreInitial: true })
                    watcher
                        .on('change', () => setWatchers())
                        .on('unlink', () => setWatchers())
                }
                else
                {
                    watcher.close()
                    watcher = null
                    console.log('Closed watcher')
                    //debounce(setWatchers, parameters.reattach_delay)
                    setWatchers()
                }
            }

            setWatchers()

            // No need to check if linked project exists in the plugin because the
            // the terminal will automatically throw an error if the project isn't
            // linked
            // const watched_project = chokidar.watch([`${ cwd }/../${ parameters.linked_project }/src`], { ignoreInitial: true })

            // // The build scripts need time to execute so throttle the updates it
            // watched_project.on('change', (change) => { throttle(rebuildLibrary.bind(null, parameters), 4000), console.log(change) })

            // watched_project.on('unlink', (change) => { throttle(rebuildLibrary.bind(null, parameters), 4000), console.log(change) })

            // const watched_project = chokidar.watch(['./../library/src/**/*'], { ignoreInitial: true, followSymlinks: true })

            // watched_project.on('change', (change) => { console.log(change); exec(`cd ../library & npm run build:library`, (error, output) => { console.log(error) }) })

        }
    }
}

export default rebuilder