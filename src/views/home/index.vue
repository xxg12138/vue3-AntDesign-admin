<!-- 首页 -->
<template>
  <div class="container">
    <div class="user">
      <a-avatar :size="200">
        <template #icon>
          <!-- 退出确认框 -->
          <img :src="store.userInfo?.avatar" alt="" v-if="store.userInfo?.token" />
          <div class="avatar" v-else></div>
        </template>
      </a-avatar>
      <div class="info">
        <div class="type">{{ store.userInfo?.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userUserStore } from '@/stores/index'
const store = userUserStore()
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  background-color: #e3e3e3;
  height: 80vh;
  .user {
    display: flex;
    align-items: center;
    .info {
      margin-left: 20px;
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
