import { defineStore } from 'pinia'
import router from '@/router/index'
import { computed, ref } from 'vue'
import type { menuList } from '@/types/tabs'
import type { RouteRecordRaw } from 'vue-router';
import hook from '@/hook/index'
export const getTabs=defineStore("tabs",()=>{
        const list=ref([] as menuList)
        // 返回路由tabbar
        const getTabList = () => {
                return router.options.routes.forEach((item: any) => {
                        if(item.hideen)return 
                        if (item.children.length === 1) {
                                return list.value.push({
                                        name: item.name,
                                        key: item.name,
                                        path: item.path,
                                        meta:item.meta
                                })
                        }
                        return list.value.push({
                                name:item.name,
                                key:item.name,
                                path: item.path,
                                meta:item.meta,
                                children: item.children.map((child: any) => ({
                                        name:child.name,
                                        key:child.name,
                                        path: child.path,
                                        meta:child.meta
                                }))
                       })
                })
        }
       
        getTabList()
        

        
        return {list}
})