import { defineStore } from 'pinia'
import type {user} from '@/types/user'
import { ref } from 'vue'

export const userUserStore = defineStore("cp-user", () => {
    const userInfo = ref<user|null>()
    
    const setUser = (data:user) => {
        userInfo.value=data
    }

    const removeUser = () => {
        userInfo.value = null
      }
    return{userInfo,setUser,removeUser}
}, {
    persist:true
})