<!--  -->
<template>
  <div class="container">
    <div
      id="histogram"
      style="width: 400px; height: 400px"
      :class="{ Minwidth: isWindowSmall }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import echarts from '@/echarts/echart'
import { onMounted } from 'vue'
import hook from '@/hook/index'
const { isWindowSmall } = hook()
onMounted(() => {
  const histogram = document.getElementById('histogram')!
  const round = echarts.init(histogram)
  const option = {
    title: {
      text: '2023年度编程语言占比',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '编程占比',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 13, name: 'Python' },
          { value: 10, name: 'C++' },
          { value: 8, name: 'Java' },
          { value: 11, name: 'C' },
          { value: 3, name: 'JavaScript' },
          { value: 55, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  round.setOption(option)
})
</script>

<style lang="scss" scoped></style>
