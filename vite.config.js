import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { FontaineTransform } from 'fontaine'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    FontaineTransform.vite({
      fallbacks: ['Arial'],
      // resolve absolute URL -> file
      resolvePath: id => new URL('.' + id, import.meta.url),
    }),
  ], 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
