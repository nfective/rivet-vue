// Used by /src/build/components-library.js

import * as fs from 'fs'

const files_paths = []

const traverser = (path, ignore_directories) => {

    try
    {
        // Use the synchronous version of readdir
        const handles = fs.readdirSync(path, { withFileTypes: true })
        
        handles.forEach(handle => {
            const handler_path = `${ path }/${ handle.name }`
            let skip_iteration = false
            for(const directory of ignore_directories)
            {
                if(handler_path.includes(`${ base_dir }/${ directory }`)) skip_iteration = true
            }
            if(skip_iteration) return
            if(handle.isDirectory()) traverser(handler_path, ignore_directories)
            if(handle.isFile()) files_paths.push(handler_path)
        })
    }
    catch(err)
    {
        console.log(`Path directory ${ path } was not found`)
    }
}

// Only finish execution when all sub-directory traversals are finished
const filesFinder = (base_directory, paths, ignore_directories = []) => {

    const base_dir = base_directory

    if(Array.isArray(paths))
    {
        try
        {
            paths.forEach(path => {
                // Fix accidentally passing in the paths with a starting /
                if(path.charAt(0) == '/') path = path.substring(1)

                path = path.replaceAll('\\', '/')

                traverser(`${ base_dir }/${ path }`.replaceAll('\\','/'), ignore_directories)
            })
        }
        catch(err)
        {
            console.error("Unreachable array of paths")
        }
    }
    else
    {
        try
        {
            // Fix accidentally passing in the paths with a starting /
            if(paths.charAt(0) == '/') paths = paths.substring(1)

            const path = paths.replaceAll('\\', '/')

            traverser(`${ base_dir }/${ path }`.replaceAll(pattern, replacement), ignore_directories)
        }
        catch(err)
        {
            console.error("Unreachable path")
        }
    }

    return files_paths
}

export default filesFinder