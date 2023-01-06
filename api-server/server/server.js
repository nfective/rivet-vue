import { createServer } from 'http'
import express from 'express'
import configurations from './configurations.js'

const server = express()

// Remove comment to enable cors options
// Comment out code to disable cors options
server.use(configurations.cors)

const app = createServer(server)
app.listen(configurations.port, () => {
    console.log(`Api server ready for requests ${ configurations.port }`)
})

export default server