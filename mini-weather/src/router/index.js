import { createRouter, createWebHistory } from "vue-router";

import Main from '@/components/Main.vue'
import About from '@/components/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path:'/about',
            name: 'About',
            component: About
        },
        {
            path: '/main',
            name: 'Main',
            component: Main
        }
    ]
})

export default router