import { defineStore } from 'pinia'
import router from '@/router/index'
import { ref } from 'vue'
import type { menuList } from '@/types/tabs'
import {h} from 'vue'

export const getTabs=defineStore("tabs",()=>{
        const list=ref([] as menuList)
        // tabbar缩大放小
        const flag=ref<boolean>(false)

        // 设置flag
        const setFlag=(e:boolean)=>{
                flag.value=e
                
        }

        const getFlag=()=>{
                return flag.value
        }
      

        // 返回路由tabbar
        const getTabList = () => {
                return router.options.routes.forEach((item: any) => {
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
        
        return {list,flag,setFlag,getFlag}
})