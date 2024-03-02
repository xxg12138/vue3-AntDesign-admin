import { defineStore } from 'pinia'
import router from '@/router/index'
import {  ref } from 'vue'
import type { menuList } from '@/types/tabs'
import { adminList,constantRoutes } from '@/router/index'

export const getTabs = defineStore("tabs", () => {
        const routes=ref<menuList>(constantRoutes)
        const list = ref([] as menuList)
        // 返回路由tabbar
        const getTabList = (s: any) => {
                list.value=[]
                return s.forEach((item: any) => {

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
       
     
        // 动态路由筛选权限
        const filterRoutes = (menus: any) => {
                const addroutes:menuList=[]
                menus.forEach((key: any) => {
                        addroutes.push(...adminList.filter(item=>item.name===key))
                })
                routes.value = [...constantRoutes, ...addroutes]
              
                return addroutes
        }

        
        
        return {list,filterRoutes,routes,getTabList}
})