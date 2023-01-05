// The plugin runs the `npm run build:library` or `npm run build:va-library`
// when a component file changes so that npm link dependencies that get the
// latest version of the component and vite and hmr reload the component file

import * as path from 'path'
import chokidar from 'chokidar'
import { exec } from 'child_process'
const cwd = process.cwd().replaceAll('\\', '/')

const rebuildLibrary = (parameters) => {
    console.log("Library changed")
    // exec(`npm unlink rivet-vue`, (err, output) => console.log(err))
    // exec(`npm link rivet-vue`, (err, output) => console.log(err))
    exec(`cd ../library && npm run build:test`, (error, output) => { console.log(error) })
}

const rebuilder = (parameters) => {
    return {
        configureServer(server) {
            parameters = JSON.parse(JSON.stringify(parameters))

            // No need to check if linked project exists in the plugin because the
            // the terminal will automatically throw an error if the project isn't
            // linked
            const watched_project = chokidar.watch(path.join(cwd, `node_modules/${ parameters.linked_package_src }`), { ignoreInitial: true })

            watched_project.on('change', () => rebuildLibrary(parameters) )

            watched_project.on('unlink', () => rebuildLibrary(parameters))
        }
    }
}

export default rebuilder