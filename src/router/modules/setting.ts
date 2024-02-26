export default {
    path:'/setting',
    component:()=>import("@/layout/index.vue"),
    edirect: '/setting',
    name: '设置',
    meta:{
      title: "例子",
      icon:'setting'
    },
    children:[{
      path:'',
      name:'设置',
      component:()=>import("@/views/setting/index.vue"),
      
      meta:{
        title: "设置",
        icom:'setting'
      }
    }]
  }