import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
    global: {},
  },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     // Node.js global to browser globalThis
  //     define: {
  //       global: 'globalThis'
  //     },
  //     // Enable esbuild polyfill plugins
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         buffer: true
  //       })
  //     ]
  //   }
  // },
  plugins: [nodePolyfills(), vue(), Unocss({})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
