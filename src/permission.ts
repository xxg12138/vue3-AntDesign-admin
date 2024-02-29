import { userUserStore,getTabs } from '@/stores/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import { adminList, resetRouter } from '@/router'
const whilteList = ['/login']

router.beforeEach((to, from, next) => {
    const user = userUserStore()
    const Tabs=getTabs()
    NProgress.start()

    if (user.userInfo?.token) {
        // 已登录状态下
        // if (store.userInfo.role.includes('Admin')) {
            // 根据权限标识返回添加动态路由
            const routes=Tabs.filterRoutes(user.userInfo.role)
                routes.forEach((item: any) => {
                console.log(item);
                
                 router.addRoute(item);
             });
        // }
        next()
    } else {
        if (whilteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})

router.afterEach((to, from) => {
    document.title = to.meta.title as string
    NProgress.done()
})
