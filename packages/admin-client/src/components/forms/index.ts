import type { App } from "vue";
import CreateTournamentVue from "./CreateTournament.vue";

export default {
  install(vue: App) {
    vue.component("FormCreateTournament", CreateTournamentVue);
  },
};
