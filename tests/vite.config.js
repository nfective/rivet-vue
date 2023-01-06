import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import rebuilder from './plugins/rebuilder'


const cwd = process.cwd().replaceAll('\\', '/')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    https: false,
    port: 80
  },
  plugins: [
    rebuilder({
      linked_project: "library",
      linked_package_src: "rivet-vue/src/**/*",
      reattach_delay: 5000,
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.join(cwd, 'src/components'),
      '#': path.join(cwd, 'src/pages')
    }
  }
})
