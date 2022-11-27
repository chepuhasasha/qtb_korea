import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./styles/main.sass";

import UI from "./components/ui";
import Widgets from "./components/widgets";
import Wrappers from "./components/wrappers";
import Blocks from "./components/blocks";
import Forms from "./components/forms";

import "highlight.js/styles/github-dark.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

declare global {
  interface EventTarget {
    result: any;
  }
}

createApp(App)
  .use(createPinia())
  .use(router)
  .use(hljsVuePlugin)
  .use(UI)
  .use(Widgets)
  .use(Blocks)
  .use(Forms)
  .use(Wrappers)
  .mount("#app");
