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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Monaco Editor into its own chunk (it's very large)
          'monaco-editor': ['@monaco-editor/react'],
          // Separate Material UI core into its own chunk
          'mui-core': ['@mui/material', '@emotion/react', '@emotion/styled'],
          // Separate Material UI icons (also quite large)
          'mui-icons': ['@mui/icons-material'],
          // Separate React and React DOM
          'react-vendor': ['react', 'react-dom'],
          // Separate parsing/AST libraries
          'ast-vendor': [
            'acorn',
            'acorn-jsx',
            'acorn-typescript',
            'acorn-walk',
            'sucrase',
          ],
          // Other vendor libraries
          vendor: ['axios', '@tanstack/react-query', 'prismjs'],
        },
      },
    },
    // Increase chunk size warning limit to 1000 kB
    chunkSizeWarningLimit: 1000,
  },
})
