<!--  -->
<template>
  <SvgIcon :name="`slider-${menu.meta.icon}`"></SvgIcon>
  <span v-if="!collapsed">{{ menu.name }}</span>
</template>

<script setup lang="ts">
import type { item } from '@/types/tabs'
defineProps<{
  menu: item
  collapsed?: boolean
}>()
</script>

<style lang="scss" scoped>
.ant-menu-title-content {
  justify-content: center !important;
  align-items: center !important;
  svg {
    margin-right: 10px;
  }
}
</style>
