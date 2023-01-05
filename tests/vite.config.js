import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const cwd = process.cwd().replaceAll('\\', '/')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    https: false,
    port: 80
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.join(cwd, 'src/components'),
      '#': path.join(cwd, 'src/pages')
    }
  }
})
