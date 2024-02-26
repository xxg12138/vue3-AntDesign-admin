export default {
    path:'/dashboard',
    component:()=>import("@/layout/index.vue"),
    edirect: '/dashboard',
    name: '探索',
    meta:{
      title: "探索",
      icon:'dashboard'
    },
    children:[{
      path:'',
      name:'探索',
      component: () => import("@/views/dashboard/index.vue"),
      meta:{
        title: "探索",
        icom:'dashboard'
      }
    }]
  }