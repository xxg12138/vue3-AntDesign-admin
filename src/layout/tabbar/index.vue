<!--  -->
<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible v-if="!isWindowSmall && list?.length">
    <div class="logo bigLogo" v-if="!collapsed">LOGO</div>
    <div class="logo smallLogo" v-else>LOGO</div>
    <!-- <a-menu v-model:selectedKeys="selectedKeys" mode="inline"> -->
    <a-menu mode="inline">
      <template v-for="(menu, index) in list" :key="menu.path">
        <a-menu-item v-if="!menu.children" :key="menu.path" @click="router.push(menu.path)">
          <span>
            <item :menu="menu" :collapsed="collapsed"></item>
          </span>
        </a-menu-item>

        <a-sub-menu v-else :key="menu.key">
          <template #title>
            <item :menu="menu" :collapsed="collapsed"></item>
          </template>
          <!-- <a-menu-item
            @click="router.push(menu.path + item.path)"
            :key="item.path"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          > -->
          <a-menu-item
            @click="changeFn(menu, item)"
            :key="item.path"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          >
            <!-- bug待修复 -->
            <!-- <item :menu="item"></item> -->
            <SvgIcon :name="`slider-${item.meta.icon}`"></SvgIcon>
            <span v-if="!collapsed">{{ item.meta.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>

  <a-layout-header v-else :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <template v-for="(menu, index) in list" :key="menu.path">
        <a-menu-item v-if="!menu.children" :key="menu.path" @click="router.push(menu.path)">
          <span>
            <item :menu="menu" :collapsed="collapsed"></item>
          </span>
        </a-menu-item>

        <a-sub-menu v-else :key="menu.key">
          <template #title>
            <item :menu="menu" :collapsed="collapsed"></item>
          </template>
          <!-- <a-menu-item
            @click="router.push(menu.path + item.path)"
            :key="item.path"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          > -->
          <a-menu-item
            @click="changeFn(menu, item)"
            :key="item.path"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          >
            <!-- bug待修复 -->
            <!-- <item :menu="item"></item> -->
            <SvgIcon :name="`slider-${item.meta.icon}`"></SvgIcon>
            <span v-if="!collapsed">{{ item.meta.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-header>
</template>

<script setup lang="ts">
import item from './components/item.vue'
import { getTabs } from '@/stores/index'
import { onMounted } from 'vue'
import { ref } from 'vue'
import type { menuList } from '@/types/tabs'
import { useRouter, useRoute } from 'vue-router'
import hook from '@/hook/index'
const { isWindowSmall } = hook()
const store = getTabs()
const list = ref<menuList>()

// 控制是否展开
const collapsed = ref<boolean>(false)
const router = useRouter()
const route = useRoute()
const selectedKeys = ref<string[]>([''])
const a = ref([1, 2, 3])
// 获取路由
onMounted(() => {
  list.value = store.list
  selectedKeys.value = [route.path]
})

const changeFn = (menu: any, item: any) => {
  router.push(menu.path + '/' + item.path)
}
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
.ant-menu-title-content svg {
  margin-right: 10px;
}
</style>
