import type { App } from "vue";
import ListItemVue from "./ListItem.vue";
import UserVue from "./User.vue";

export default {
  install(vue: App) {
    vue.component("BlockUser", UserVue);
    vue.component("BlockListItem", ListItemVue);
  },
};
