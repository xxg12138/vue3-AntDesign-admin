import SvgIcon from '@/components/SvgIcon.vue'
import Toast from '@/components/toast.vue'
declare module 'vue' {
  interface GlobalComponents {
    SvgIcon: typeof SvgIcon
    Toast:typeof Toast
  }
}