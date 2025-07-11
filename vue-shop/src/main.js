import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App) //
  .use(router) //
  .mixin(mixins)
  .mount("#app");

window.Kakao.init("bfd38b7dfa70310b722511b50e896241");
