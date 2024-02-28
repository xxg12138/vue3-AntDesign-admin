import { request } from '@/utils/request'
import type {DepartmentData} from '@/types/department'

export const getDepartmentList = () => {
    return request<DepartmentData>({
        url: "/department",
    })
}