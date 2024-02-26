import Mock from "mockjs";
// 模拟接口数据
Mock.mock(/login/, "post", (res: any) =>{
    const data = JSON.parse(res.body)
    if (data.user === 'admin') {
        return {
            status: 200,
            message: '登录效验通过',
            data: {
                id: 1,
                name: "开发者",
                avatar:  'https://xxg-1313373043.cos.ap-guangzhou.myqcloud.com/uploads/%E7%BE%8A.jpg',
                token:'vue3-AntDesign-admin'
            }
          }
       
    }
    return {
        status: 404,
        message: '用户名错误',
  }
});
  
