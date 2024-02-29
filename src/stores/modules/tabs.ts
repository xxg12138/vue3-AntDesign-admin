import { defineStore } from 'pinia'
import router from '@/router/index'
import { computed, ref } from 'vue'
import type { menuList } from '@/types/tabs'
import { adminList } from '@/router/index'
import {userUserStore } from './user'

export const getTabs=defineStore("tabs",()=>{
        const list=ref([] as menuList)
        // 返回路由tabbar
        const getTabList = () => {
                return router.options.routes.forEach((item: any) => {
                        if(item.hidden)return 
                        if (item.children.length === 1) {
                                return list.value.push({
                                        name:item.meta.title,
                                        key: item.name,
                                        path: item.path,
                                        meta:item.meta
                                })
                        }
                        return list.value.push({
                                name:item.meta.title,
                                key:item.name,
                                path: item.path,
                                meta:item.meta,
                                children: item.children.map((child: any) => ({
                                        name:child.meta.title,
                                        key:child.name,
                                        path: child.path,
                                        meta:child.meta
                                }))
                       })
                })
        }
       
        getTabList()
        // const filterRoutes = (context: any, menus: any) => {

        // 动态路由筛选权限
        const filterRoutes = ( menus: any) => {
                const routes:any=[]
                menus.forEach((key:any) => {
                        routes.push(...adminList.filter(item=>item.name===key))
                })
                return routes
        }

        
        return {list,filterRoutes}
})