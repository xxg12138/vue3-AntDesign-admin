<!--  -->
<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo bigLogo" v-if="!collapsed">LOGO</div>
    <div class="logo smallLogo" v-else>LOGO</div>
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <template v-for="(menu, index) in list" :key="menu.path">
        <a-menu-item v-if="!menu.children" :key="menu.path" @click="router.push(menu.path)">
          <span>
            <item :menu="menu" :collapsed="collapsed"></item>
          </span>
        </a-menu-item>

        <a-sub-menu v-else>
          <template #title>
            <item :menu="menu" :collapsed="collapsed"></item>
          </template>
          <a-menu-item
            @click="router.push(menu.path + item.path)"
            :key="item.path"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          >
            <item :menu="item"></item>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import item from './components/item.vue'
import { getTabs } from '@/stores/index'
import { onMounted } from 'vue'
import { ref } from 'vue'
import type { menuList } from '@/types/tabs'
import { useRouter, useRoute } from 'vue-router'
const store = getTabs()
const list = ref<menuList>()

// 控制是否展开
const collapsed = ref<boolean>(false)
const router = useRouter()
const route = useRoute()
const selectedKeys = ref<string[]>([''])
// 获取路由
onMounted(() => {
  list.value = store.list
  // 打开页面默认选择
  selectedKeys.value = [route.path]
})
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  color: #e94242;
}
.bigLogo {
  font-size: 35px;
}
.smallLogo {
  font-size: 15px;
}
</style>
