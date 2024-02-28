import axios from 'axios'
import {userUserStore } from '@/stores/index'

const baseURL = "https://127.0.0.1:80"

const request=axios.create({
    baseURL,
    timeout:5000
})

request.interceptors.request.use(config => {
    const store = userUserStore()
    if (store.userInfo?.token) {
        config.headers['Authorization']=`Bearer ${store.userInfo.token}`
    }
    return config
})

request.interceptors.response.use(res => {
    return res.data
})

export {request,baseURL}