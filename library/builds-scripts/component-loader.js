import fs from 'fs'
import { fileNameFromPath, trimEndingCharacters } from "./utilities/strings/string-modifiers.js"
import filesFinder from "./utilities/directories/files-finder.js"

const cwd = process.cwd().replaceAll(/[\\]/g, '/')

// Specify base directory to look from
const base_dir = `${ cwd }`

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

    return prefix
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

    return extension
}

// Takes an array of paths and traverses them to get component
const componentsLoader = (components_directories = [''], component_prefixes = ['Rvt'], component_extensions = ['vue']) => {

    // Specify base directory
    const components_paths = filesFinder(base_dir, components_directories)

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

    return components
}

const componentLoader = (components, component_path, component_prefixes = ['Rvt'], component_extensions = ['vue']) => {

    const file_name = fileNameFromPath(component_path)

    const component_name = file_name.substring(file_name, file_name.lastIndexOf('.'))

    if(component_name in components) {

        delete components[component_name]

    }

    // CANNOT BE DRY BECAUSE THE ABOVE ESCAPES THE FOREACH ITERATION

    const has_component_file_prefix = includesPrefix(component_prefixes, file_name)

    if(has_component_file_prefix === false) return components

    const has_component_file_extension = includesExtension(component_extensions, file_name)

    if(has_component_file_extension === false) return components

    console.log(components)

    // Skip adding file if it is empty
    if(fs.readFileSync(component_path, { encoding:'utf8', flag:'r'}) === '') return components

    // Component path import neededs to be relative to the file with the install method which is index.js
    component_path = component_path.substring(component_path.indexOf('src')).replace('src', '.')

    components[component_name] = `import ${ component_name } from '${ component_path }'`

    return components
}

const componentRemover = (components, component_path) => {

    const file_name = fileNameFromPath(component_path)

    const component_name = file_name.substring(file_name, file_name.lastIndexOf('.'))

    if(component_name in components) delete components[component_name]

    return components
}

export {
    componentsLoader,
    componentLoader,
    componentRemover
}