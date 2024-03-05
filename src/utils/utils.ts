import type { DepartmentData, DepartmentList } from '@/types/department';

// 部门树算法
export const buildTree = (departments: DepartmentData, parentId: number | null = null) => {
    const tree: DepartmentList = [];
    departments.forEach(department => {
        if (department.parentId === parentId) {
            const children = buildTree(departments, department.id);
            if (children.length > 0) {
                (department as any).children = children;
            }
            tree.push(department as any);
        }
    });

    return tree;
};


export const success=  async({ header, results }:any)=> {
      const userRelations = {
        'id': 'id',
        '姓名': 'username',
        '年龄': 'age'
      }
      const arr = []
      // 遍历所有的数组
      results.forEach((item:any) => {
      // 需要将每一个条数据里面的中文都换成英文
        const userInfo = {}
        // Object.keys(item).forEach(key => {
        // // key是当前的中文名 找到对应的英文名
        //   if (userRelations[key] === 'timeOfEntry' || userRelations[key] === 'correctionTime') {
        //     userInfo[userRelations[key]] = new Date(this.formatDate(item[key], '/')) // 只有这样, 才能入库
        //     return
        //   }
        //   userInfo[userRelations[key]] = item[key]
          // })
          console.log("每条数据：",item);
          
        // 最终userInfo变成了全是英文
        arr.push(userInfo)
      })
    console.log('成功');
    
    //   await importEmployee(arr)
    //   this.$message.success('导入成功')
  }