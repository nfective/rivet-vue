import { Router } from 'express';
const router = Router();

import api from '../api/routes.js'

router.use('/api', api)

router.get('/', (req, res) => {
    res.end('api server is active')
})

export default router