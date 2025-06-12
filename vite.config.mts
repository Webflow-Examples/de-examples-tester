import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import wfHotReload from '@xatom/wf-app-hot-reload'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [wfHotReload(), viteReact()],
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
  server: {
    port: 1337,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  base: './',
})
