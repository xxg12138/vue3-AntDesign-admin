import Mock from "mockjs";

// 登录名单
const roll = ['admin', 'user']
// ROOT
// 模拟接口数据
Mock.mock(/login/, "post", (res: any) =>{
    const data = JSON.parse(res.body)
    const role=data.user==='admin'?['dashboard','Table','documents','modularPackage','setting']:['User'] 
    if (roll.includes(data.user)) {
        return {
            status: 200,
            message: '登录效验通过',
            data: {
                id: 1,
                name: "开发者",
                avatar:  'https://xxg-1313373043.cos.ap-guangzhou.myqcloud.com/uploads/%E7%BE%8A.jpg',
                token: 'vue3-AntDesign-admin',
                role
            }
          }
       
    }
    return {
        status: 404,
        message: '用户名错误',
  }
});
  
