import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/reset.css";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "virtual:generated-pages";
import "@/assets/icons/iconfont/iconfont";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
