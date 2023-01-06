import cors from 'cors'
import path from 'path'
const configurations = Object.create(null)

configurations.port ??= 5000

const cors_options = {
    origin: 'https://localhost:8080',
    method: 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
    // Allow custom headers like token
    // Authorization is already a standard and doesn't need to be specified
    allowHeaders: 'Token',
    optionSuccessStatus: 204
}

configurations.cors = cors(cors_options)

export default configurations