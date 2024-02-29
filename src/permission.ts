import { getTabs } from '@/stores/index'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router/index'
import {constantRoutes } from '@/router/index'

const whiteList = ['/login']


router.beforeEach((to,from,next) => {
    NProgress.start();
  const user = JSON.parse(localStorage.getItem('cp-user') as string)
  if (user.userInfo) {
        if (whiteList.includes(to.path)) {
            next({path:'/'})
        } else {
          // 获取新增权限页面
          const tabs =  getTabs().filterRoutes(user.userInfo.role)
          // tabbar渲染
          getTabs().getTabList([...constantRoutes,...tabs])
                    tabs.forEach((route:any) => {
                      router.addRoute(route);
                  });
          
          next()
        }

  } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
          } else {
            next(`/login?redirect=${to.path}`);
          }
    }
})

router.afterEach((to, from) => {
    
    document.title = to.meta.title as string
    NProgress.done()
})
