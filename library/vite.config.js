import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

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
    vue({
      isProduction: true,
      reactivityTransform: true
    })
  ]
})
