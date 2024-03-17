<!--  -->
<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible v-if="!isWindowSmall && list?.length">
    <div class="logo bigLogo" v-if="!collapsed">
      <SvgIcon :name="`svg-logo`"></SvgIcon>
      Admin
    </div>
    <div class="logo smallLogo" v-else>
      <SvgIcon :name="`svg-logo`"></SvgIcon>
    </div>
    <a-menu mode="inline" v-model:selectedKeys="selectedKeys">
      <template v-for="(menu, index) in list" :key="menu.path">
        <a-menu-item v-if="!menu.children" :key="menu.name" @click="router.push(menu.path)">
          <span>
            <item :menu="menu" :collapsed="collapsed"></item>
          </span>
        </a-menu-item>

        <a-sub-menu v-else :key="menu.key">
          <template #title>
            <item :menu="menu" :collapsed="collapsed"></item>
          </template>
          <a-menu-item
            @click="changeFn(menu, item)"
            :key="item.name"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          >
            <item :menu="item"></item>
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
        <a-menu-item v-if="!menu.children" :key="menu.name" @click="router.push(menu.path)">
          <span>
            <item :menu="menu" :collapsed="collapsed"></item>
          </span>
        </a-menu-item>

        <a-sub-menu v-else :key="menu.key">
          <template #title>
            <item :menu="menu" :collapsed="collapsed"></item>
          </template>
          <a-menu-item
            @click="changeFn(menu, item)"
            :key="item.name"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          >
            <item :menu="item"></item>
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
const selectedKeys = ref<string[]>([])
// 获取路由
onMounted(() => {
  list.value = store.list
  console.log(route.name)

  selectedKeys.value = [route.name] as string[]
})

const changeFn = (menu: any, item: any) => {
  router.push(menu.path + '/' + item.path)
}
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  overflow: auto; /* 保留滑动效果 */
  height: 100vh;
}

/* 隐藏滚动条 */
.ant-layout-sider::-webkit-scrollbar {
  display: none !important; /* 隐藏滚动条 */
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-weight: 700;
  background-color: #163057;
  color: #fff;
  svg {
    margin-right: 10px;
    font-size: 35px;
  }
}
.bigLogo {
  font-size: 25px;
}
.smallLogo {
  font-size: 15px;
}
.ant-menu-title-content svg {
  margin-right: 10px;
}
</style>
