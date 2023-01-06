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

    components_paths.forEach(component_path => {

        const file_name = fileNameFromPath(component_path)

        const has_component_file_prefix = includesPrefix(component_prefixes, file_name)

        if(has_component_file_prefix === -1) return

        const has_component_file_extension = includesExtension(component_extensions, file_name)

        if(has_component_file_extension === -1) return

        const component_name = file_name.substring(file_name, file_name.lastIndexOf('.'))

        // Component path import neededs to be relative to the file with the install method which is index.js
        component_path = component_path.substring(component_path.indexOf('src')).replace('src', '.')

        components[component_name] = `import ${ component_name } from '${ component_path }'`
    })

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

    if(has_component_file_prefix === -1) return components

    const has_component_file_extension = includesExtension(component_extensions, file_name)

    if(has_component_file_extension === -1) return components

    // Component path import neededs to be relative to the file with the install method which is index.js
    component_path = component_path.substring(component_path.indexOf('src')).replace('src', '.')

    components[component_name] = `import ${ component_name } from '${ component_path }'`

    return components
}

const componentRemover = (components, component_path) => {

    const file_name = fileNameFromPath(component_path)

    const component_name = file_name.substring(file_name, file_name.lastIndexOf('.'))

    if(component_name in components) {
        // Only remove if the paths are the same
        if(components[component_name].includes('./' + component_path.substring(component_path.indexOf('src/') + 4)))
        {
            delete components[component_name]
        }
    }

    return components
}

export {
    componentsLoader,
    componentLoader,
    componentRemover
}