import type { App } from "vue";
import AlertVue from "./Alert.vue";
import InputVue from "./Input.vue";
import ModalVue from "./Modal.vue";

export default {
  install(vue: App) {
    vue.component("WrapperModal", ModalVue);
    vue.component("WrapperInput", InputVue);
    vue.component("WrapperAlert", AlertVue);
  },
};
