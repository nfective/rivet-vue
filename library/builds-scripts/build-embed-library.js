import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'

const cwd = process.cwd().replaceAll(/\\/g, '/')

const read_file = 'dist/rivet-vue.es.js'

const temporary_file = 'dist/rivet-vue.es.tmp'

const embedded_file = 'dist/rivet-vue.em.js'

// Delete file if it already exists
const unlink = (file) => {
    if(fs.existsSync(path.join(cwd, file)))
    {
        fs.unlinkSync(path.join(cwd, file))
    }
}

unlink(temporary_file)

// Create a reader
const line = readline.createInterface({ input: fs.createReadStream(path.join(cwd, read_file)), crlfDelay: Infinity });

// Read file line by line and 
line.on('line', (line) => {
    // Only replace line with vue
    if(line.match(/import/g) != null && line.match(/"vue"/g) != null)
    {
        // Manipulate the file to const instead of import
        line = line.replaceAll("import", "const")
        line = line.replaceAll(" as", ":")
        line = line.replaceAll("from \"vue\"", "= { ...Vue }")
    }
    fs.appendFileSync(path.join(cwd, temporary_file), line + '\r\n')
});

line.on('close', () => {
    fs.copyFileSync(path.join(cwd, temporary_file), path.join(cwd, embedded_file))

    unlink(temporary_file)
})
