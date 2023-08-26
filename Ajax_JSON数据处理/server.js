// 1. 引入express
const express = require("express");

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response)=>{
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*")
    // 设置响应
    response.send("HELLO AJAX GET");
});

app.post("/serverJSON", (request, response)=>{
    // 设置响应头 此响应头似乎是用来解决跨域问题的，不过目前还不清楚
    response.setHeader("Access-Control-Allow-Origin", "*")
    // 是不是随便设置响应头？=>不是
    // response.setHeader("Access-Test", "这是一段随便写的话，目的是测试响应头是否随意设置（虽然大概率不可能")

    const data = {
        name: "Drewod"
    };

    // 设置响应
    response.send(JSON.stringify(data));
});

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中……");
});