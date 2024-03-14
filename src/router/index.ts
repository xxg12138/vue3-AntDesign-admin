import { createRouter, createWebHistory } from 'vue-router'
import setting from './modules/setting'
import Table from './modules/Table'
import dashboard from './modules/dashboard'
import modularPackage from './modules/modularPackage'
import documents from './modules/documents'
import threeDimensional from './modules/threeDimensional'



export const constantRoutes = [
  {
    path:'/login',
    component: () => import("@/views/login/index.vue"),
    hidden:true
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
        title: '首页',
        icon:'home'
      }
    }]
  },
]


// 动态路由
export const  adminList = [
  dashboard,
  Table,
  threeDimensional,
  setting,
  modularPackage,
  documents
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[...constantRoutes],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})



/**
 * 重置路由
 */
// export function resetRouter() {
//   const newRouter = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: constantRoutes
//   })

//   router.matcher = newRouter.currentRoute.value.matched
// }

export default router
