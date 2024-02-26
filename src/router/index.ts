import { createRouter, createWebHistory } from 'vue-router'
import setting from './modules/setting'
import example from './modules/example'

const routes = [
  {
    path:'/login',
    component: () => import("@/views/login/index.vue"),
    hideen:true
  },
  {
    path:'/',
    component:()=>import("@/layout/index.vue"),
    redirect: '/dashboard',
    name: '探索',
    meta:{
      title: '探索',
      icon:'dashboard'
    },
    children:[{
      path:'/dashboard',
      name:'探索',
      component: () => import("@/views/dashboard/index.vue"),
      meta:{
        title: '探索',
        icon:'dashboard'
      }
    }]
  },
  setting,
  example
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
