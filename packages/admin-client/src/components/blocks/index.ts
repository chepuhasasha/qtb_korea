import type { App } from "vue";
import ProductListItem from "./ProductListItem.vue";
import UserVue from "./User.vue";

export default {
  install(vue: App) {
    vue.component("BlockUser", UserVue);
    vue.component("BlockProductListItem", ProductListItem);
  },
};
