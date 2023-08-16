import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TestPinia from "../views/test-pinia.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/pinia',
            name: 'test-pinia',
            component: TestPinia
        },
    ]
})

export default router