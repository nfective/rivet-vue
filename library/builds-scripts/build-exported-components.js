import fs from 'fs'

// Must specify a path that's not a vite config resolver alias
import { fileNameFromPath, trimEndingCharacters } from "./utilities/strings/string-modifiers.js"
import filesFinder from "./utilities/directories/files-finder.js"

const cwd = process.cwd().replaceAll(/[\\]/g, '/')

const includesPrefix = (prefixes, file_name) => {
    let prefix = false

    const prefixes_length = prefixes.length

    for(let i = 0; i < prefixes_length; i++)
    {
        const prefix_length = prefixes[i].length

        if(file_name.substring(0, prefix_length) === prefixes[i]) {
            prefix = true
            break;
        }
    }
}

const includesExtension = (extensions, file_name) => {
    let extension = false

    const extensions_length = extensions.length

    for(let i = 0; i < extensions_length; i++)
    {
        const extension_length = extensions[i].length

        if(file_name.substring(file_name.length - extension_length) === extensions[i]) {
            extension = true
            break;
        }
    }
}

const buildExportedComponents = (compile_directories = [''], component_prefixes = ['Rvt'], component_extensions = ['vue']) => {

    // Specify base directory to look from
    const base_dir = `${ cwd }/src`

    // Specify base directory
    const components_paths = filesFinder(base_dir, compile_directories)
    
    // Components to be exported
    let components = {}

    let components_path_length = components_paths.length

    for(let i = 0; i < components_path_length; i++)
    {
        const file_name = fileNameFromPath(components_paths[i])

        const has_component_file_prefix = includesPrefix(component_prefixes, file_name)

        // Skip iteration if false
        if(has_component_file_prefix === false) continue

        const has_component_file_extension = includesExtension(component_extensions, file_name)

        // Skip iteration if false
        if(has_component_file_extension === false) continue

        // Skip iteration if file is empty
        if(fs.readFileSync(components_paths[i], { encoding:'utf8', flag:'r'}) === '') continue

        const component_name = file_name.substring(file_name, file_name.lastIndexOf('.'))

        // Check and prevent duplicate components
        if(component_name in components) {
            console.log(`Component ${ component_name } is a duplicate component`)
            continue
        }
        else
        {
            components[component_name] = `import ${ component_name } from '${ components_paths[i] }'`
        }
    }

    // Import string
    let import_string = ''

    // Export string
    let export_string = ''

    for(const [key, value] of Object.entries(components))
    {
        import_string += `${ value }\n`
    
        export_string += `\t${ key },\r\n`
    }

    export_string = trimEndingCharacters(["\n","\r",","], export_string)

    // Format the code in the way vitejs views an exported file for a library
    export_string = `export {\r\n${ export_string }\r\n}`
    
    fs.appendFileSync(`${ base_dir }/exported-components.js`, `${ import_string }\n`)
    
    fs.appendFileSync(`${ base_dir }/exported-components.js`,  export_string)
}

const buildEntryFile = () => {

    // Specify base directory to build file in
    const base_dir = `${ cwd }/src`

    const entry_file_content = 
`import * as components from './exported-components.js'

export default {
    install: (app, options) => {
        for(const [key, value] of Object.entries(components))
        {
            app.component(key, value)
        }
    }
}
`

    fs.writeFileSync(`${ base_dir }/index.js`, entry_file_content)
}

export {
    buildExportedComponents,
    buildEntryFile
}