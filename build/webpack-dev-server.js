'use strict';

const webpack          = require('webpack');
const webpackDevConf   = require('./webpack-dev.conf');
const webpackDevServer = require('webpack-dev-server');
const serverPort = 8011;
const url = 'http://localhost:9090';
const cookie = 'JSESSIONID=122131312sadasda';

const compiler = webpack(webpackDevConf);

// 实例化webpack-dev-server
const server = new webpackDevServer(compiler, {
  // 配置proxy代理服务
  proxy:{
    '/api/*': {
      target: url,
      scure: false,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('cookie', cookie);
      }
    }
  }
})

// 引用hot-middleware 热加载中间件
const hotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(hotMiddleware);

// 启动http服务，提供实施打包编译服务
server.listen(serverPort, (error) => {
  if(!error){
    console.log('start webpack-dev-server http server at localhost ' + serverPort + ' port');
  }
})