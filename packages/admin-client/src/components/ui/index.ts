import type { App } from "vue";
import Input from "./Input.vue";
import InputDate from "./InputDate.vue";
import Textarea from "./Textarea.vue";
import Select from "./Select.vue";
import Button from "./Button.vue";

export default {
  install(vue: App) {
    vue.component("InputTag", Input);
    vue.component("InputDateTag", InputDate);
    vue.component("TextareaTag", Textarea);
    vue.component("SelectTag", Select);
    vue.component("ButtonTag", Button);
  },
};
