'use strict';

const webpackDevConf = require('./webpack-dev.conf');
const express        = require('express');
const webpack        = require('webpack');
const port           = 8011;

//实例化express框架
const app = express();

const compiler = webpack(webpackDevConf)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackDevConf.output.publicPath,
  stats: {
    colors: true,
    thunks: false
  }
})
const hotMiddleware = require('webpack-hot-middleware')(compiler);

// 使用middleware中间件，启动实施打包编译服务和热加载服务
app.use(devMiddleware);
app.use(hotMiddleware);

//http 服务启动，监听8011端口
app.listen(port, (err) => {
  if(!err){
    console.log('start http server at localhost ' + port + ' port');
  }
})