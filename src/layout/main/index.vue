<!-- content内容 -->
<template>
  <div class="container"></div>
  <a-layout-content style="margin: 0 16px">
    <keep-alive>
      <RouterView :key="key"></RouterView>
    </keep-alive>
  </a-layout-content>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const key = computed(() => route.path)
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10px;
}
</style>
