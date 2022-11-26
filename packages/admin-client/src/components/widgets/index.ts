import type { App } from "vue";
import IconVue from "./Icon.vue";
import LoaderVue from "./Loader.vue";
import LoaderLineVue from "./LoaderLine.vue";
import ServerMessageVue from "./ServerMessage.vue";

export default {
  install(vue: App) {
    vue.component("WidgetIcon", IconVue);
    vue.component("WidgetServerMessage", ServerMessageVue);
    vue.component("WidgetLoader", LoaderVue);
    vue.component("WidgetLoaderLine", LoaderLineVue);
  },
};
