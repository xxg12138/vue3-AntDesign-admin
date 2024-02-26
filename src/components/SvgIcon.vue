<!-- svg图标组件 -->
<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :href="`#icon-${name}`" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: false
  },
  color: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
}
</style>
