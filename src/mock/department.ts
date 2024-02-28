import Mock from "mockjs";
// 模拟接口数据
Mock.mock(/department/, "get", (res: any) => { 
        return {
            status: 200,
            message: '登录效验通过',
            data: [
                { id: 1, name: "总裁办", parentId: null, leader: "张三", foundedYear: "2005" },
                { id: 2, name: "技术总监", parentId: 1, leader: "李四", foundedYear: "2007" },
                { id: 3, name: "产品总监", parentId: 1, leader: "王五", foundedYear: "2006" },
                // 更多部门信息...
                { id: 100, name: "市场营销部", parentId: 3, leader: "赵六", foundedYear: "2008" },
                { id: 101, name: "客户服务部", parentId: 8, leader: "田七", foundedYear: "2010" },
                { id: 102, name: "公关部", parentId: 8, leader: "孙八", foundedYear: "2009" },
                // 更多部门信息...
                { id: 1000, name: "人力资源部", parentId: 1, leader: "周九", foundedYear: '2007' },
                { id: 1001, name: "财务部", parentId: 1, leader: "钱十", foundedYear: '2006' },
                { id: 1002, name: "法务部", parentId: 1, leader: "吴十一", foundedYear: "2008" },
                // 更多部门信息...
                { id: 5000, name: "战略发展部", parentId: 1, leader: "郑十二", foundedYear: "2009" },
                { id: 5001, name: "数据分析部", parentId: 2, leader: "马十三", foundedYear: "2011" },
                { id: 5002, name: "商务拓展部", parentId: 3, leader: "蒋十四", foundedYear: "2010" },
                // 更多部门信息...
                { id: 10000, name: "研发部", parentId: 2, leader: "孙十五", foundedYear: "2013" },
                { id: 10001, name: "销售部", parentId: 100, leader: "李十六", foundedYear: "2012" },
                { id: 10002, name: "运营部", parentId: 101, leader: "周十七", foundedYear: "2014" },
                // 更多部门信息...
              ]
          }
       

})