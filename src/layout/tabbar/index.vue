<!--  -->
<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo bigLogo" v-if="!collapsed">LOGO</div>
    <div class="logo smallLogo" v-else>LOGO</div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <template v-for="(menu, index) in list" :key="index">
        <a-menu-item v-if="!menu.children" :key="menu.key" @click="router.push(menu.keyPath)">
          <span>
            <!-- <SvgIcon :name="`slider-${menu.meta.icon}`"></SvgIcon>
            <span v-if="!collapsed">{{ menu.name }}</span> -->
            <item :menu="menu" :collapsed="collapsed"></item>
          </span>
        </a-menu-item>

        <a-sub-menu v-else>
          <template #title>
            <!-- <span>
              <SvgIcon :name="`slider-${menu.meta.icon}`"></SvgIcon>
              <span v-if="!collapsed">{{ menu.name }}</span>
            </span> -->
            <item :menu="menu" :collapsed="collapsed"></item>
          </template>
          <a-menu-item
            @click="router.push(item.keyPath)"
            :key="i"
            v-if="menu.children"
            v-for="(item, i) in menu.children"
          >
            <item :menu="item"></item>
            <!-- <SvgIcon :name="`slider-${item.meta.icon}`"></SvgIcon>
            <span>{{ item.name }}</span> -->
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
import { useRouter } from 'vue-router'
const store = getTabs()
const list = ref<menuList>()

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
const router = useRouter()

onMounted(() => {
  list.value = store.list
  console.log(list.value)
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
