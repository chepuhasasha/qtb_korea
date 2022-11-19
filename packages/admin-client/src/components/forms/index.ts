import type { App } from "vue";
import CreateBrandVue from "./CreateBrand.vue";
import CreateProductVue from "./CreateProduct.vue";
import CreateUserVue from "./CreateUser.vue";

export default {
  install(vue: App) {
    vue.component("FormCreateProduct", CreateProductVue);
    vue.component("FormCreateBrand", CreateBrandVue);
    vue.component("FormCreateUser", CreateUserVue);
  },
};
