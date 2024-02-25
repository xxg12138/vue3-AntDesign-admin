<template>
  <a-layout style="min-height: 100vh">
    <slider></slider>
    <a-layout>
      <headerNav></headerNav>
      <mainTent></mainTent>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import mainTent from './main/index.vue'
import headerNav from './header/index.vue'
import slider from './tabbar/index.vue'


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
</style>
