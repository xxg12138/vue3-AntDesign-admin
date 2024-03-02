export default {
    path:'/modularPackage',
    component:()=>import("@/layout/index.vue"),
    // edirect: '/modularPackage',
    name: 'modularPackage',
    meta:{
      title: "组件封装",
      icon:'modularPackage'
    },
    children:[
    {
      path:'wangEditor',
      name:'富文本编辑器',
      component: () => import("@/views/wangEditor/wangEditor.vue"),
      meta:{
        title: "富文本编辑器",
        icom:'wangEditor'
      }
      },
      {
        path:'modularPackage',
        name:'测试',
        component: () => import("@/views/modularPackage/index.vue"),
        meta:{
          title: "测试",
          icom:'modularPackage'
        }
      }
    ]
  }