import * as fs from 'fs'

const cwd = process.cwd()

const cleanBuild = () => {

    try {
        if(fs.existsSync(`${ cwd }\\src\\exported-components.js`))
        {
            fs.unlinkSync(`${ cwd }\\src\\exported-components.js`)
        }
    
        if(fs.existsSync(`${ cwd }\\src\\index.js`))
        {
            fs.unlinkSync(`${ cwd }\\src\\index.js`)
        }
    }
    catch(e) {
        console.error("npm does not have permissions to remove the file export-component.js" +
        `in the ${ cwd }\\src\\build directory. Remove it manually before running vite build ` +
        " again. Optionally, leave it and it will be overwritten the next time vite build is ran.")
    }
    
}

export default cleanBuild