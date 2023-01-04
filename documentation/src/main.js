import App from './App.vue'
import { createApp } from 'vue'
import RivetVue from 'rivet-vue'
import 'rivet-vue/dist/style.css'
// import 'rivet-vue/dist/style.css'

// Rivet.init()

const app = createApp(App)
app.use(RivetVue)
app.mount('#app')