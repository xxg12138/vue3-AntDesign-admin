export default {
  path:'/Table/',
  component: () => import("@/layout/index.vue"),
  redirect: 'dynamic-table',
  name: "Table",
  meta:{
    title: "Table",
    icon:'Table'
  },
    children:[{
      path:'dynamic-table',
      name:"综合 Table",
      component:()=>import("@/views/Table/index.vue"),
      meta:{
        title: "综合 Table",
        icon:'Table'
      },
    },
    {
      path:'drag-table',
      name:'拖拽 Table',
      component:()=>import("@/views/dragTable/index.vue"),
      meta:{
        title: "拖拽 Table",
        icon:'DragTable'
      }
      }]
  }