import Mock from "mockjs";
import * as XLSX from 'xlsx';

// 模拟接口数据
Mock.mock(/sendExcel/, "post", (res: any) => { 
      // 假设 res.body 是你打算读取的对象
if (res.body instanceof Blob || res.body instanceof File) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
      // 当文件读取完成后，这里会被调用
      const data = event.target?.result;
      // 接下来，你可以处理 data...
  };
  fileReader.readAsBinaryString(res.body);
} else {
  console.error('The provided parameter is not a Blob or File.');
}

        
    return {
            status: 200,
            message: '获取成功',
          }
       

})