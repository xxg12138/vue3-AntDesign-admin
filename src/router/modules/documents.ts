export default {
    path:'/documents',
    component:()=>import("@/layout/index.vue"),
    redirect: '/documentsd',
  name: 'documents',
  role:['admin'],
    meta:{
      title: "平台文档",
      icon:'documents'
    },
    children:[{
      path:'',
      name:'平台文档',
      component: () => import("@/views/documents/index.vue"),
      meta:{
        title: "平台文档",
        icom:'documents'
      }
    }]
  }