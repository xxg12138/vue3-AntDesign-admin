<!--  -->
<template>
  <a-layout-header>
    <div class="header">
      <div class="left">
        <a-breadcrumb>
          <a-breadcrumb-item
            v-for="(item, index) in route.matched"
            :key="index"
            v-if="containsAtLeastTwoSlashes(route.fullPath)"
          >
            <RouterLink :to="item.path"> {{ item.name }} </RouterLink>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <!-- 右部操作 -->
      <div class="right">
        <!-- 全屏 -->
        <FullscreenExitOutlined @click="fullScreen" class="sreen" v-if="isFullscreen" />
        <FullscreenOutlined @click="fullScreen" class="sreen" v-else />
        <!-- 选择主题色 -->
        <input type="color" :value="data.colorPrimary" @input="changeColor" />
        <a-dropdown @click.prevent>
          <a class="ant-dropdown-link">
            <div class="avatar"></div>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
  <toast
    :open="open"
    @ToastCancel="ToastCancel"
    @ToastOk="ToastOk"
    :title="'否确认改变主题色?'"
  ></toast>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { theme } from 'ant-design-vue'
import screenfull from 'screenfull'
import { showMessage } from '@/utils/toast'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)

const defaultData = {
  colorPrimary: '#1890ff'
}
// 控制对话框
const open = ref(false)
// 颜色值
const data = ref(defaultData)
const { token } = theme.useToken()

let color = ref('' as string)

// 状态
const flag = ref(false)

// 获取根元素
const root = ref(document.documentElement)

// 获取颜色
const changeColor = async (e: any) => {
  open.value = true
  color.value = e.target.value
}

// 判断对话框是否关闭
const ToastCancel = () => {
  open.value = false
  flag.value = false
  console.log('Cancel关闭:', flag.value)
}
const ToastOk = () => {
  open.value = false
  flag.value = true
  console.log('OK关闭:', flag.value)

  root.value.style.setProperty('--header-color', color.value)
}

// 是否全屏
const isFullscreen = ref(false)

// 控制是否全屏
const fullScreen = () => {
  if (screenfull.isEnabled) {
    isFullscreen.value = !isFullscreen.value
    if (isFullscreen.value) {
      screenfull.request()
    } else {
      screenfull.exit()
    }
  } else {
    showMessage('warning', '当前浏览器不支持全屏操作')
  }
}

// 判断路由路径
const containsAtLeastTwoSlashes = (str: string) => {
  const regex = /\//g
  const matches = str.match(regex)
  return matches && matches.length >= 2
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
  .ant-dropdown-link {
    margin-left: 20px;
    .avatar {
      position: relative;
      background-color: #c4e1c5;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}

input[type='color'] {
  border: 1px solid v-bind('token.colorBorder');
  background-color: v-bind('token.colorBgBase');
}

.sreen {
  font-size: 25px;
  color: var(--color);
  margin: 0 20px;
}
</style>
