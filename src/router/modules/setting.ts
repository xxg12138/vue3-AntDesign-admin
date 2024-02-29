export default {
    path:'/setting',
    component:()=>import("@/layout/index.vue"),
    edirect: '/setting',
    name: 'setting',
    meta:{
      title: "设置",
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