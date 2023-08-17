import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "../router/index.js";
import { markRaw } from "vue";

export const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

pinia.use(({ store }) => {
    store.router = markRaw(router)
})
