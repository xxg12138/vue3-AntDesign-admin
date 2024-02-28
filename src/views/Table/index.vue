<template>
  <a-table
    :pagination="false"
    :defaultExpandAllRows="true"
    :columns="columns"
    :row-key="(record: any) => record.name"
    :data-source="list"
    v-if="list"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import type { ColumnsType } from 'ant-design-vue/es/table/interface'
import { getDepartmentList } from '@/api/department'
import { buildTree } from '@/utils/utils'
import type { DepartmentList } from '@/types/department'
import { ref } from 'vue'
onMounted(() => {
  getData()
})

// 部门数据
const list = ref<DepartmentList>()
// 获取数据
const getData = async () => {
  const { data } = await getDepartmentList()
  list.value = buildTree(data)
  console.log(list.value)
}
const columns: ColumnsType = [
  {
    title: '部门',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '姓名',
    dataIndex: 'leader',
    key: 'leader'
  },
  {
    title: '创办时间',
    dataIndex: 'foundedYear',
    key: 'address',
    responsive: ['lg']
  }
]

interface DataItem {
  key: number
  name: string
  age: number
  address: string
  children?: DataItem[]
}

const data: DataItem[] = [
  {
    key: 1,
    name: '灰心星球',
    age: 10000,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 2,
        name: '大大怪',
        age: 45,
        address: 'New York No. 1 Lake Park',
        children: [
          {
            key: 2,
            name: '大大怪',
            age: 45,
            address: 'New York No. 1 Lake Park'
          }
        ]
      }
    ]
  }
]
</script>
<style lang="scss" scoped></style>
