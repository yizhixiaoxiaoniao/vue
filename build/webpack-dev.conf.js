const path = require('path');
const webpackConf = require('./webpack.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const port = 8011;
const url = 'http://localhsot:' + port;

// 开发环境的webpack配置文件，相关参数要重写
webpackConf.mode = 'development';
webpackConf.output.publicPath = '/';
webpackConf.plugins = [

  //hot-middleware config
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../index.html')
  }),
  new VueLoaderPlugin(),
  new OpenBrowserPlugin({url: url})
]


// hot-middleware config
const devClient = 'webpack-hot-middleware/client';
Object.keys(webpackConf.entry).forEach((item) => {
  const extras = [devClient];
  webpackConf.entry[item] = extras.concat(webpackConf.entry[item]);
})

module.exports = webpackConf;
