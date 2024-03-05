// mock/index.js
import Mock from "mockjs";
import './login'
import './department'
import './modularPackage'
// 启用 Mock 进行接口模拟
Mock.setup({
  timeout: "200-600" // 可选项，模拟接口延迟响应的时间范围
});

export default Mock