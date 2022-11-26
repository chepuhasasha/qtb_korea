import type { App } from "vue";
import ListItemVue from "./ListItem.vue";
import UserVue from "./User.vue";
import UserListItemVue from "./UserListItem.vue";

export default {
  install(vue: App) {
    vue.component("BlockUser", UserVue);
    vue.component("BlockUserListItem", UserListItemVue);
    vue.component("BlockListItem", ListItemVue);
  },
};
