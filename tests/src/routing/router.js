// Only meant for Development due to it's use of greedy regex
import { createRouter, createWebHistory } from 'vue-router'
import initial_routes from './routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes: initial_routes
})

export default router