import { createApp } from 'vue'
import pinia from '@/stores/index'
import '@/styles/main.scss'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
