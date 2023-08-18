import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/reset.css";
import { createRouter, createWebHistory } from "vue-router/auto";
import "@/assets/icons/iconfont/iconfont";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import 'virtual:uno.css'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const router = createRouter({
  history: createWebHistory(),
});

const app: ReturnType<typeof createApp> = createApp(App);
app.use(pinia);
app.use(router);

app.mount("#app");
