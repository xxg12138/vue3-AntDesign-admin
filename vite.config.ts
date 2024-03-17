import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
import path from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    open:true
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 配置svg文件路径
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
    }),
    Components({
      // ui库解析器，也可以自定义
      resolvers: [
        AntDesignVueResolver({ importStyle: false })
      ]
    }),
  
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
