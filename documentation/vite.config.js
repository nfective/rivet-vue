import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // hmr: { overlay: false },
    host: true,
    https: false,
    port: 8080
  },
  plugins: [vue()],
})
