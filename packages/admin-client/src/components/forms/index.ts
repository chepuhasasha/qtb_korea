import type { App } from "vue";
import CreateProduct from "./CreateProduct.vue";

export default {
  install(vue: App) {
    vue.component("FormCreateProduct", CreateProduct);
  },
};
