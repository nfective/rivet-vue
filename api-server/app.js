import express from 'express'
import Server from './server/server.js'
import router from './routing/router.js'

Server.use(router)
Server.use(express.static('public'))