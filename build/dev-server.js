const webpackDevConf = require('./webpack-dev.conf');
const express = require('express');
const webpack = require('webpack');
const port = 8011;

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

app.use(devMiddleware);
app.use(hotMiddleware);


//http 服务
app.listen(port, (err) => {
  if(!err){
    console.log('start http server at localhost ' + port + ' port');
  }
})