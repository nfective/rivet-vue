import { createApp } from 'vue'
import Router from './routing/router.js'
import App from './App.vue'
import RivetVue from 'rivet-vue'
import { init } from 'rivet-vue/dist/rivet@2.2.0.es.js'
import 'rivet-vue/dist/rivet@2.2.0.css'
init()

const app = createApp(App)
app.use(Router)
app.use(RivetVue)
app.mount('#app')
