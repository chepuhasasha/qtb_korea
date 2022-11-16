import vitePluginString from "vite-plugin-string";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  meta: {
    title: "QTB",
  },
  layoutTransition: {},
  plugins: [{ src: "~/plugins/pixi.plugin", mode: "client", ssr: false }],
  vite: {
    plugins: [
      vitePluginString(),
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
});
