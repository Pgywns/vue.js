import { createApp } from "vue";
import App from "./App.vue";
import store from "./store"; // Vuex 상태관리
import router from "./router"; // Vue Router
import "./assets/style.css"; // 공통 CSS

createApp(App).use(store).use(router).mount("#app");
