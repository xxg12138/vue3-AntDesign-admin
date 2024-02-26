import axios from 'axios'

const baseURL = "https://127.0.0.1:80"

const request=axios.create({
    baseURL,
    timeout:5000
})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(res => {
    return res.data
})

export {request,baseURL}