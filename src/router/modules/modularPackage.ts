export default {
    path:'/modularPackage',
  component: () => import("@/layout/index.vue"),
  // redirect: '/dwangEditor',
    name: 'modularPackage',
    meta:{
      title: "组件封装",
      icon:'modularPackage'
    },
    children:[
    {
      path:'',
      name:'富文本编辑器',
      component: () => import("@/views/wangEditor/wangEditor.vue"),
      meta:{
        title: "富文本编辑器",
        icon:'WangEditor'
      }
      },{
        path:'signature',
        name:'电子签名',
        component: () => import("@/views/signature/index.vue"),
        meta:{
          title: "电子签名",
          icon:'pen'
        }
        }
    ]
  }