import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: resolve(__dirname, 'docs')
  },
  server: {
    open: true,
    port: 8282,
    watch: {
      include: ['src/**', 'src-docs/**']
    }
  },
  preview: {
    open: false,
    port: 8181,
    strictPort: true
  }
})
