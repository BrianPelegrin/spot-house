import { createWebHistory, RouteRecordRaw, createRouter } from "vue-router"
import HomeView from "../views/HomeView.vue"
import MainLayout from "../layouts/MainLayout.vue"
import AuthLayout from "../layouts/AuthLayout.vue"

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        component:MainLayout,
        children:[
            {
                path:'',
                name:'home',
                component:HomeView
            }
        ]
    },
    {
        path:'/auth',
        component:AuthLayout,
        children:[
            {
                path:'login',
                name:'login',
                component:()=> import('../views/auth/LoginView.vue')
            },
            {
                path:'register',
                name:'register',
                component:()=> import('../views/auth/LoginView.vue')
            },
        ]
    },
    
]

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})