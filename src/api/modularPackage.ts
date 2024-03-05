import { request } from '@/utils/request'

export const sendExcel = (data:any) => {
    return request({
        url: "/sendExcel",
        method:'post',
        data
    })
}