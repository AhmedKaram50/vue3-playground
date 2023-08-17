import { createApp } from "vue";
import router from "./router/index.js";
import "./style.css";
import App from "./App.vue";
import { pinia } from "./config/pinia.js";



const app = createApp(App);


app
.use(router)
.use(pinia)
.mount("#app");
