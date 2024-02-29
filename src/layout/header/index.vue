<!--  -->
<template>
  <a-layout-header v-if="!isWindowSmall">
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
        <!-- 下拉菜单 -->
        <a-dropdown @click.prevent>
          <a class="ant-dropdown-link">
            <!-- 头像 -->
            <a-avatar :size="48">
              <template #icon>
                <!-- 退出确认框 -->
                <img :src="store.userInfo?.avatar" alt="" v-if="store.userInfo?.token" />
                <div class="avatar" v-else></div>
              </template>
            </a-avatar>
          </a>
          <!-- 菜单 -->
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <a href="http://localhost:5173/home">个人中心</a>
              </a-menu-item>
              <a-menu-item key="1">
                <a href="https://github.com/xxg12138/vue3-AntDesign-admin">项目地址</a>
              </a-menu-item>
              <a-menu-divider />

              <a-menu-item key="3">
                <a-popconfirm
                  title="你确认要退出吗?"
                  ok-text="确认"
                  cancel-text="取消"
                  @confirm="confirm"
                  @cancel="cancel"
                  placement="left"
                >
                  退出登录
                </a-popconfirm></a-menu-item
              >
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
import { ref, watchEffect } from 'vue'
import { theme } from 'ant-design-vue'
import screenfull from 'screenfull'
import { showMessage } from '@/utils/toast'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import { userUserStore } from '@/stores/index'
import { message } from 'ant-design-vue'
import router from '@/router'
import hook from '@/hook/index'
const { isWindowSmall } = hook()
const route = useRoute()
const store = userUserStore()

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
}
const ToastOk = () => {
  open.value = false
  flag.value = true
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

// 退出
const confirm = (e: MouseEvent) => {
  message.success('退出登录成功')
  store.removeUser()
  router.push('/login')
}

const cancel = (e: MouseEvent) => {
  console.log(e)
  message.warn('您已取消')
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
