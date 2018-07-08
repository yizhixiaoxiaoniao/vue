'use strict';

const webpack         = require('webpack');
const path            = require('path');
const webpackBaseConf = require('./webpack.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const VueLoaderPlugin   = require('vue-loader/lib/plugin');

/**
  开发环境的webpack配置文件，需要重写相关参数（mode、output、plugins等）
*/
const devPlugins = [
  // hot-middleware plugin
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  // html
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../index.html')
  }),
  // open browser
  new OpenBrowserPlugin({"url": "http://localhost:8011"}),
  new VueLoaderPlugin()
]

webpackBaseConf.mode = 'development';
webpackBaseConf.output.publicPath = '/';
webpackBaseConf.plugins = devPlugins;

// hot-middleware config
const devClient = 'webpack-hot-middleware/client';
Object.keys(webpackBaseConf.entry).forEach((item) => {
  const extras = [devClient];
  webpackBaseConf.entry[item] = extras.concat(webpackBaseConf.entry[item]);
})

module.exports = webpackBaseConf;
