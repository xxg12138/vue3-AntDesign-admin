<!-- content内容 -->
<template>
  <div class="container"></div>
  <a-layout-content>
    <a-card>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </a-card>
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
