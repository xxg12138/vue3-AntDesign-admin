export default {
    path:'/threeDimensional',
    component:()=>import("@/layout/index.vue"),
    redirect: '/threeDimensional',
  name: 'threeDimensional',
  role:['admin'],
    meta:{
      title: "3D",
      icon:'3D'
    },
    children:[{
      path:'',
      name:'three',
      component: () => import("@/views/three/index.vue"),
      meta:{
        title: "three",
        icom:'logistic'
      }
    }]
  }