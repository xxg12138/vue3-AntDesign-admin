import { userUserStore } from '@/stores/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'

const whilteList = ['/login']
router.beforeEach((to, from, next) => {
    const store=userUserStore()
    NProgress.start()
    console.log(store.userInfo?.token);
    
  if (store.userInfo?.token) {
    if (whilteList.includes(to.path)) {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    if (whilteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from, next) => {
  document.title = to.meta.title as string
  NProgress.done()
})