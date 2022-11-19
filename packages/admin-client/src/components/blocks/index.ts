import type { App } from "vue";
import BrandListItemVue from "./BrandListItem.vue";
import ProductListItem from "./ProductListItem.vue";
import UserVue from "./User.vue";
import UserListItemVue from "./UserListItem.vue";

export default {
  install(vue: App) {
    vue.component("BlockUser", UserVue);
    vue.component("BlockProductListItem", ProductListItem);
    vue.component("BlockBrandListItem", BrandListItemVue);
    vue.component("BlockUserListItem", UserListItemVue);
  },
};
