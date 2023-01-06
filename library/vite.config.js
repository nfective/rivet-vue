import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import rebuilder from './plugins/vite-plugin-rebuilder.js'

const cwd = process.cwd().replaceAll('\\', '/')

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "rivet-vue",
      formats: ["es", "umd"],
      fileName: (format) => `rivet-vue.${ format }.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    emptyOutDir: true,
    // Do not sourcemap it otherwise the em version won't be build correctly
    sourcemap: false
  },
  plugins: [
    // Rebuilds the dist folder on changes to src
    rebuilder({
      entry_file: 'index.js',
      watched_directories: ['src/components', 'src/vue-additions']
    }),
    vue({
      isProduction: true,
      reactivityTransform: true
    })
  ],
  resolve: {
    alias: {
      // File imports don't care about regex parameters
      '_': path.join(cwd, './src'), 
      ':': path.join(cwd, './src/utilities'),
      '@': path.join(cwd, './src/components'),
      '?': path.join(cwd, './src/vue-additions'),
    }
  },
  server: {
    host: true,
    https: false,
    port: 5173
  }
})
