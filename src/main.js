import { createApp } from "vue";
import router from "./router/index.js";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app
.use(router)
.use(pinia)
.mount("#app");
