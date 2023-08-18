import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import components from "unplugin-vue-components/vite";
import autoImport from "unplugin-auto-import/vite";
import {
  AntDesignVueResolver,

} from "unplugin-vue-components/resolvers";
import path from "path";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import UnoCSS from 'unocss/vite'
export default defineConfig(async () => ({
  plugins: [
    UnoCSS(),
    VueRouter({
      routesFolder: "src/views",
      extensions: [".vue"],
      exclude: [],
      dts: "./typed-router.d.ts",
      routeBlockLang: "json5",
      importMode: "async",
    }),
    vue(),
    components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
       
      ],
    }),
    autoImport({
      imports: ["vue", VueRouterAutoImports],
      
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/app.scss";`,
      },
    },
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://www.cloudmusic.top",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


