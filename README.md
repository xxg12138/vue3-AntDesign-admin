# vue3-AntDesign-admin

<!-- - [Introduction](#introduction)
- [Project Setup](#project-setup) -->
  <!-- - [Setup Commands](#setup-commands)
  - [Development](#development)
  - [Production](#production)
  - [Unit Tests](#unit-tests)
  - [Linting](#linting) -->

# 简介：

[Vvue3-AntDesign-admin](https://github.com/xxg12138/vue3-AntDesign-admin)是一个基于 Vue3、TypeScript、Vite 和 Pinia 构建的可复用后台管理系统，旨在提供高性能、可定制化的管理界面解决方案。

支持动态路由配置，便于新增页面和菜单
使用 Pinia 状态管理库，提供了可预测的状态管理解决方案
基于 Vite 构建，具备快速的开发和热更新能力
使用 TypeScript 编写，提供类型检查和更好的代码提示

技术栈：
Vue 3：用于构建用户界面的 JavaScript 框架
TypeScript：提供静态类型检查和更好的编辑器支持
Vite：现代化的构建工具，用于快速构建应用
Pinia：Vue 3 状态管理库，提供了类似 Vuex 的功能
UI 组件库：

Ant Design Vue：基于 Vue.js 实现的 Ant Design 设计规范，提供了丰富的 UI 组件和交互行为。
其他工具：

Axios：用于处理 HTTP 请求
Prettier：用于格式化代码，保持统一的代码风格
ESLint：用于规范代码质量
其他工具：用于提高开发效率和代码质量

### 功能

- 登录 / 注销

- 权限验证

  - 页面权限

- 全局功能

  - 动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg 图标 封装
  - 本地/后端 mock 数据
  - Screenfull全屏

- 組件
  - 头像上传
  - 对话框

### 目录结构

```
├── src // 源代码
│   ├── api // 所有请求
│   ├── assets // 静态资源
│   │   ├── components // 全局公用组件
│   │   ├── icons // 项目所有 svg icons
│   ├── lang // 国际化 language
│   ├── layout // 页面布局
│   ├── mock // 项目mock 模拟数据
│   ├── router // 路由
│   ├── store // 全局 store管理
│   ├── styles // 全局样式
│   ├── types // ts定义
│   ├── utils // 全局公用方法
│   ├── views // view
│   ├── App.vue // 入口页面
│   ├── main.js // 入口 加载组件 初始化等
│   └── permission.js // 权限管理
├── .babelrc // babel-loader 配置
├── eslintrc.js // eslint 配置项
├── .prettierrc // Prettier 配置项
├── .gitignore // git 忽略项
├── index.html // html模板
├── vite.config // vite配置
└── package.json // package.json
```
