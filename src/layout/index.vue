<template>
  <a-layout style="min-height: 100vh" has-sider>
    <slider class="slider"></slider>
    <a-layout>
      <div class="main" :class="{ minMain: isWindowSmall }">
        <headerNav></headerNav>
        <mainTent></mainTent>
      </div>
    </a-layout>
  </a-layout>
  <!-- 悬浮按钮 -->
  <a-float-button-group v-if="isWindowSmall" shape="circle" trigger="click">
    <a-float-button @click="outFn">
      <template #icon>
        <SvgIcon name="components-out"></SvgIcon>
      </template>
    </a-float-button>
  </a-float-button-group>
  <Toast
    :open="show"
    :title="'是否确认退出？'"
    @ToastCancel="closeToast"
    @ToastOk="closeOut"
  ></Toast>
</template>
<script lang="ts" setup>
import mainTent from './main/index.vue'
import headerNav from './header/index.vue'
import slider from './tabbar/index.vue'
import hook from '@/hook/index'
import { ref } from 'vue'
import { userUserStore } from '@/stores/index'
import { message } from 'ant-design-vue'
import router from '@/router'

const store = userUserStore()

const { isWindowSmall } = hook()
const show = ref(false)
const outFn = () => {
  show.value = true
}
const closeToast = () => {
  show.value = false
}
const closeOut = () => {
  show.value = false
  message.success('退出登录成功')
  store.removeUser()
  router.push('/login')
}
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.main {
  overflow-x: hidden;
  height: 100vh;
  background-color: #f0f3f6;
}
</style>
