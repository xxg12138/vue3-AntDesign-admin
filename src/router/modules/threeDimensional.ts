export default {
    path:'/threeDimensional',
    component:()=>import("@/layout/index.vue"),
    redirect: '/threeDimensional',
    name: 'threeDimensional',
    meta:{
      title: "3D",
      icon:'3D'
    },
    children:[{
      path:'',
      name:'gis',
      component: () => import("@/views/gis/index.vue"),
      meta:{
        title: "gis",
        icom:'logistic'
      }
    }]
  }