# vue3-AntDesign-admin

# Table of Contents

<!-- - [Introduction](#introduction)
- [Project Setup](#project-setup) -->
  <!-- - [Setup Commands](#setup-commands)
  - [Development](#development)
  - [Production](#production)
  - [Unit Tests](#unit-tests)
  - [Linting](#linting) -->

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

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

├── src // 源代码
│   ├── api // 所有请求
│ ├── assets // 静态资源
│   ├── components // 全局公用组件
│   ├── icons // 项目所有 svg icons
│   ├── lang // 国际化 language
│   ├── layout // 页面布局
│   ├── mock // 项目mock 模拟数据
│   ├── router // 路由
│   ├── store // 全局 store管理
│   ├── styles // 全局样式
│   ├── types // ts定义
│   ├── utils // 全局公用方法
│   ├── views // view
│   ├── App.vue // 入口页面
│   ├── main.js // 入口 加载组件 初始化等
│ └── permission.js // 权限管理
├── .babelrc // babel-loader 配置
├── eslintrc.js // eslint 配置项
├── .prettierrc // Prettier 配置项
├── .gitignore // git 忽略项
├── index.html // html模板
├── vite.config // vite配置
└── package.json // package.json
