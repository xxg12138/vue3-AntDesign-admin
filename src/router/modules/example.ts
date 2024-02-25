export default {
    path:'/',
  component: () => import("@/layout/index.vue"),
  edirect: '/example',
  name: "例子",
  meta:{
    title: "例子",
    icon:'example'
  },
    children:[{
      path:'/example',
      name:"例子",
      component:()=>import("@/views/example/index.vue"),
      meta:{
        title: "例子",
        icon:'example'
      },
    },
    {
      path:'/works',
      name:'作品',
      component:()=>import("@/views/works/index.vue"),
      meta:{
        title: "作品",
        icon:'works'
      }
      }]
  }