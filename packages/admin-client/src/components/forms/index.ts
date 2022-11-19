import type { App } from "vue";
import CreateBrandVue from "./CreateBrand.vue";
import CreateProduct from "./CreateProduct.vue";

export default {
  install(vue: App) {
    vue.component("FormCreateProduct", CreateProduct);
    vue.component("FormCreateBrand", CreateBrandVue);
  },
};
