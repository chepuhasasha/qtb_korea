import type { App } from "vue";
import AlertVue from "./Alert.vue";
import InputVue from "./Input.vue";
import ModalVue from "./Modal.vue";
import FormVue from "./Form.vue";
import ListItemVue from "../blocks/ListItem.vue";

export default {
  install(vue: App) {
    vue.component("WrapperModal", ModalVue);
    vue.component("WrapperInput", InputVue);
    vue.component("WrapperAlert", AlertVue);
    vue.component("WrapperForm", FormVue);
  },
};
