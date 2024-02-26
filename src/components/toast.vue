<!-- 对话框组件 -->
<template>
  <a-modal
    v-model:open="data.open"
    :title="title"
    ok-text="确认"
    cancel-text="取消"
    @ok="okModal"
    @cancel="hideModal"
  >
    <slot name="content"></slot>
  </a-modal>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

const props = defineProps<{
  open?: boolean
  title?: string
}>()
const data = toRef(props)

// 父组件关闭toast
const emit = defineEmits<{
  (e: 'ToastCancel'): void
  (e: 'ToastOk'): void
}>()
// 取消关闭
const hideModal = () => {
  emit('ToastCancel')
}
// 确认关闭
const okModal = () => {
  emit('ToastOk')
}
</script>

<style lang="scss" scoped></style>
