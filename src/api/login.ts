import { request } from '@/utils/request'
import type {user,loginInfo} from '@/types/user'

export const login = (data:loginInfo) => {
    return request<user>({
        url: "/login",
        method:'post',
        data
    })
}