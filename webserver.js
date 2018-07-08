'use strict';

const http = require('http');
const express = require('express');
const serverPort = 9090;

// 实例化express框架
const app = express();
// 本地启动后台http服务
const server = http.createServer(app);
server.listen(serverPort, () => {
  console.log('start http server at localhost ' + serverPort + ' port');
})

// 路由处理
app.use('/', (req, res, next) => {
  console.log('req header cookie: ')
  console.log(req.header.cookie);
  next();
})

app.use('/api/test', (req, res, next) => {
  console.log("Access /api/test router");
  const resP = {
    err: 0,
    data: {name: 'test', age: 'test'},
    message: "success",
  };
  res.write(JSON.stringify(resP));
  res.end();
})

app.use('/', (req, res, next) => {
  console.log("Access error router with 404");
  res.status(404);
  res.end('error req router!');
})
