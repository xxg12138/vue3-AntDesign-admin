<template>
  <div class="container">
    <a-card :style="{ width: isWindowSmall ? '350px' : '600px' }">
      <canvas
        ref="canvas"
        :width="isWindowSmall ? '300px' : '550px'"
        height="300px"
        @touchstart="startDrawing"
        @touchmove="draw"
        @touchend="stopDrawing"
        @touchcancel="stopDrawing"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
      ></canvas>
      <div class="btn">
        <a-button type="primary" @click="clearCanvas">清空</a-button>
        <a-button type="primary" size="large" @click="saveSignature">
          <template #icon>
            <DownloadOutlined />
          </template>
        </a-button>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import hook from '@/hook/index'
import { showMessage } from '@/utils/toast'
const { isWindowSmall } = hook()

const canvas = ref<HTMLCanvasElement | null>(null)
let isDrawing = false
let ctx: CanvasRenderingContext2D | null = null

// 移动端签名阻止默认行为方法
// 阻止触摸事件的默认行为
const preventDefault = (event: TouchEvent) => {
  event.preventDefault()
}

// 绑定触摸事件监听器
const bindTouchEvents = () => {
  document.addEventListener('touchmove', preventDefault, { passive: false })
}

// 解绑触摸事件监听器
const unbindTouchEvents = () => {
  document.removeEventListener('touchmove', preventDefault)
}

// 鼠标按下或手指触摸屏幕标记
const startDrawing = (event: MouseEvent | TouchEvent) => {
  if (canvas.value) {
    isDrawing = true
    ctx = canvas.value.getContext('2d') as CanvasRenderingContext2D
    if (ctx) {
      bindTouchEvents() // 阻止页面滚动
      const rect = canvas.value.getBoundingClientRect()
      const x = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX) - rect.left
      const y = (event instanceof MouseEvent ? event.clientY : event.touches[0].clientY) - rect.top
      ctx.beginPath()
      ctx.moveTo(x, y)
    }
  }
}

// 绘画开始
const draw = (event: MouseEvent | TouchEvent) => {
  if (isDrawing && ctx) {
    const rect = canvas.value!.getBoundingClientRect()
    const x = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX) - rect.left
    const y = (event instanceof MouseEvent ? event.clientY : event.touches[0].clientY) - rect.top
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

// 停止绘画
const stopDrawing = () => {
  isDrawing = false
  unbindTouchEvents() // 解除阻止页面滚动
}

// 清空
const clearCanvas = () => {
  if (canvas.value && ctx) {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  }
}

// 保存到本地
const saveSignature = () => {
  if (canvas.value) {
    try {
      const dataURL = canvas.value.toDataURL()
      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'signature.png'
      link.click()
      showMessage('success', '保存成功')
    } catch (err) {
      showMessage('error', '保存失败，请稍后再试')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  .ant-card-body {
    display: flex !important;
    justify-content: center;
    align-items: center;
    canvas {
      border: 1px solid #000;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 16px;

      .ant-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        padding: 6px 16px;
      }
    }
  }
}
</style>

<!-- <template>
  <a-card :style="{ width: isWindowSmall ? '450px' : '600px' }">
    <canvas
      ref="canvas"
      :width="isWindowSmall ? '400px' : '550px'"
      height="300px"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
    ></canvas>
    <div class="btn">
      <a-button type="primary" @click="clearCanvas">清空</a-button>
      <a-button type="primary" size="large">
        <template #icon>
          <DownloadOutlined @click="saveSignature" />
        </template>
      </a-button>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import hook from '@/hook/index'
const { isWindowSmall } = hook()

const canvas = ref<HTMLCanvasElement | null>(null)
let isDrawing = false
let ctx: CanvasRenderingContext2D | null = null

// 鼠标按下标记
const startDrawing = (event: MouseEvent) => {
  if (canvas.value) {
    isDrawing = true
    ctx = canvas.value.getContext('2d') as CanvasRenderingContext2D
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(event.offsetX, event.offsetY)
    }
  }
}

// 绘画开始
const draw = (event: MouseEvent) => {
  if (isDrawing && ctx) {
    ctx.lineTo(event.offsetX, event.offsetY)
    ctx.stroke()
  }
}

// 停止绘画
const stopDrawing = () => {
  isDrawing = false
}

// 清空
const clearCanvas = () => {
  if (canvas.value && ctx) {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  }
}

// 保存到本地
const saveSignature = () => {
  if (canvas.value) {
    const dataURL = canvas.value.toDataURL()
    const link = document.createElement('a')
    link.href = dataURL
    link.download = 'signature.png'
    link.click()
  }
}
</script>

<style lang="scss" scoped>
// :deep(.ant-card-body) {
.ant-card-body {
  display: flex !important;
  justify-content: center;
  align-items: center;
  canvas {
    // border: 1px solid #000;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style> -->
