import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'Jedison'
    },
    sourcemap: true,
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: 'jedison.js',
          dir: resolve(__dirname, './dist/esm')
        },
        {
          format: 'cjs',
          entryFileNames: 'jedison.js',
          dir: resolve(__dirname, './dist/cjs')
        },
        {
          format: 'cjs',
          entryFileNames: 'jedison.cjs',
          dir: resolve(__dirname, './dist/cjs')
        },
        {
          format: 'umd',
          name: 'Jedison',
          entryFileNames: 'jedison.js',
          dir: resolve(__dirname, './dist/umd')
        }
      ]
    },
    minify: 'terser'
  }
})
