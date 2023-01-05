import { createApp } from 'vue'
import Router from './routing/router.js'
// import './rivet@2.2.0.css'
import App from './App.vue'

const app = createApp(App)
app.use(Router)
app.mount('#app')
