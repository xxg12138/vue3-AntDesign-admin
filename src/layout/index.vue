<template>
  <a-layout style="min-height: 100vh">
    <slider></slider>
    <a-layout>
      <div class="main" :class="{ minMain: windowWidth <= 720 }">
        <headerNav></headerNav>
        <mainTent></mainTent>
      </div>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons-vue'
import mainTent from './main/index.vue'
import headerNav from './header/index.vue'
import slider from './tabbar/index.vue'
import hook from '@/hook/index'
const { windowWidth } = hook()
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
  background-color: #ffffff;
}
</style>
