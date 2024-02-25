import SvgIcon from '@/components/SvgIcon.vue'
// declare module '*.vue' {
//   import { ComponentOptions } from 'vue'
//     const componentOptions: ComponentOptions
//     export default componentOptions
//   }
declare module 'vue' {
  interface GlobalComponents {
    SvgIcon: typeof SvgIcon
  }
}