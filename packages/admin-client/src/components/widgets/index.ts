import type { App } from "vue";
import IconVue from "./Icon.vue";
import LoaderVue from "./Loader.vue";
import LoaderLineVue from "./LoaderLine.vue";
import PrizeVue from "./Prize.vue";
import ServerMessageVue from "./ServerMessage.vue";
import StatusVue from "./Status.vue";

export default {
  install(vue: App) {
    vue.component("WidgetIcon", IconVue);
    vue.component("WidgetServerMessage", ServerMessageVue);
    vue.component("WidgetPrize", PrizeVue);
    vue.component("WidgetStatus", StatusVue);
    vue.component("WidgetLoader", LoaderVue);
    vue.component("WidgetLoaderLine", LoaderLineVue);
  },
};
