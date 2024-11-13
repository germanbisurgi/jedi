import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'Jedi'
    },
    sourcemap: true,
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: 'jedi.js',
          dir: resolve(__dirname, './dist/esm')
        },
        {
          format: 'cjs',
          entryFileNames: 'jedi.js',
          dir: resolve(__dirname, './dist/cjs')
        },
        {
          format: 'cjs',
          entryFileNames: 'jedi.cjs',
          dir: resolve(__dirname, './dist/cjs')
        },
        {
          format: 'umd',
          name: 'Jedi',
          entryFileNames: 'jedi.js',
          dir: resolve(__dirname, './dist/umd')
        }
      ]
    },
    minify: 'terser'
  }
})
