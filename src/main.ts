import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/reset.css";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "virtual:generated-pages";
import "@/assets/icons/iconfont/iconfont";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia =createPinia()
pinia.use(piniaPluginPersistedstate)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(pinia).mount("#app");
