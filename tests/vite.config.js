import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const cwd = process.cwd().replaceAll('\\', '/')

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
      '#': path.join(cwd, 'src/pages'),
      ':': path.join(cwd, 'src/utilities'),
      '=': path.join(cwd, 'src/shared-custom-components')
    }
  }
})
