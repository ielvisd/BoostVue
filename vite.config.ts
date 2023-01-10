import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Allow Node.js builtins to be used with Vite - https://github.com/vitejs/vite/discussions/2785#discussioncomment-3751927
    nodePolyfills(),
    Unocss({ /* options */ }),
    typescript2({
      check: false,
      include: ["src/components/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ["vite.config.ts", "main.ts"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/ViewerPlugin.ts",
      formats: ["es", "cjs"],
      name: "ViwerPlugin",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
