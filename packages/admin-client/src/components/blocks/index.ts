import type { App } from "vue";
import TournamentListItemVue from "./TournamentListItem.vue";
import UserVue from "./User.vue";

export default {
  install(vue: App) {
    vue.component("BlockUser", UserVue);
    vue.component("BlockTournamentListItem", TournamentListItemVue);
  },
};
