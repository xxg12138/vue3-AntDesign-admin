<!--  -->
<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import * as Cesium from 'cesium'

import { onMounted } from 'vue'

onMounted(() => {
  const viewer = new Cesium.Viewer('container')
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(113.318977, 23.114155, 200)
  })
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
