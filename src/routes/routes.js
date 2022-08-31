import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Page from "../pages/Page.vue";
import PageTwo from "../pages/PageTwo.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/page', component: Page },
    { path: '/page-two', component: PageTwo },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router