import vitePluginString from "vite-plugin-string";

export default defineNuxtConfig({
  meta: {
    title: 'QTB',
  },
  layoutTransition: {},
  plugins: [{ src: "~/plugins/pixi.plagin", mode: "client", ssr: false }],
  vite: {
    plugins: [vitePluginString()],
  },
})
