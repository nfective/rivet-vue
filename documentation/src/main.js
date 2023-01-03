import App from './App.vue'
import { createApp } from 'vue'
import SimpleLib from 'simp-lib'
import 'simp-lib/dist/style.css'

const app = createApp(App)
app.use(SimpleLib)
app.mount('#app')