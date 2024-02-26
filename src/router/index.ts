import { createRouter, createWebHistory } from 'vue-router'
import setting from './modules/setting'
import Table from './modules/Table'
import dashboard from './modules/dashboard'

const routes = [
  {
    path:'/login',
    component: () => import("@/views/login/index.vue"),
    hideen:true
  },
  {
    path:'/',
    component:()=>import("@/layout/index.vue"),
    redirect: '/home',
    name: '首页',
    meta:{
      title: '首页',
      icon:'home'
    },
    children:[{
      path:'/home',
      name:'首页',
      component: () => import("@/views/home/index.vue"),
      meta:{
        title: '探索',
        icon:'home'
      }
    }]
  },
  dashboard,
  Table,
  setting,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
