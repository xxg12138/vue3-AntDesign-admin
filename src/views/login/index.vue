<!--  -->
<template>
  <div class="container">
    <!-- 卡片 -->
    <a-card
      :class="{ min: isWindowSmall }"
      title="vue3-AntDesign-admin系统"
      :tab-list="tabList"
      :active-tab-key="key"
      @tabChange="(key: string) => onTabChange(key, 'key')"
    >
      <template #customTab="item">
        <span v-if="item.key === 'tab1'">
          <home-outlined />
          {{ item.key }}
        </span>
      </template>
      <a-form
        :rules="rules"
        :model="formState"
        :hideRequiredMark="true"
        ref="formRef"
        :label-col="{ span: '4' }"
        name="custom-validation"
        @finish="submit"
      >
        <a-form-item name="user" has-feedback label="用户名">
          <a-input v-model:value="formState.user" type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item has-feedback label="密码" name="password">
          <a-input v-model:value="formState.password" type="password" autocomplete="off" />
        </a-form-item>
        <!-- 登录注册 -->
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" v-if="key === 'login'" html-type="submit">登录</a-button>
          <a-button type="primary" v-else html-type="submit">注册</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-form-item>
      </a-form>
      <div class="prompt">
        <div>
          <div>管理员用户名：admin</div>
          <div>普通用户名：user</div>
        </div>
        <div>密码随意</div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { legacyLogicalPropertiesTransformer } from 'ant-design-vue'
import { reactive, ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { FormInstance } from 'ant-design-vue'
import { login } from '@/api/login'
import { userUserStore } from '@/stores/index'
import { useRouter } from 'vue-router'
import { showMessage } from '@/utils/toast'
import hook from '@/hook/index'
const { isWindowSmall } = hook()
const store = userUserStore()
const router = useRouter()
// 登录注册切换
const tabList = [
  {
    key: 'login',
    tab: '登录'
  },
  {
    key: 'register',
    tab: '注册'
  }
]

const key = ref('login')
const onTabChange = (value: string, type: string) => {
  key.value = value
}
// 表单处理
interface FormState {
  user: string
  password: string
}
const formRef = ref<FormInstance>()

const formState = reactive<FormState>({
  user: '',
  password: ''
})

// 效验规则
const rules: Record<string, Rule[]> = {
  user: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 3, max: 8, message: '名称长度不能超过8位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度8-16位', trigger: 'blur' }
  ]
}
// 登录
const submit = async () => {
  try {
    const { data } = await login(formState)
    if (data) {
      store.setUser(data)
      showMessage('success', '登录成功')
      router.push('/')
    } else {
      showMessage('error', '账号密码错误，请重新输入')
    }
  } catch (error) {
    console.log(error)
  }
}
// 重置
const resetForm = () => {
  formRef.value?.resetFields()
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #1890ff;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-card {
    width: 400px;
    height: 60%;
  }
  .prompt {
    font-size: 15px;
    font-weight: 700;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
}

.min {
  width: 80% !important;
  height: 450px !important;
}
</style>
