## 描述
这是一个vue模板工程，集成了webpack的打包、实时编译、热加载和代理服务，嵌入了vue-router路由和iview UI库，引用eslint语法校验工具；
实现一个简单的后台 server 服务，提供后台数据返回；

## 如何开始？
首先要安装项目npm 依赖，打开终端执行 npm install 安装整个工程的依赖库
若不需要代理服务，则执行命令： npm start
若需要代理服务，则执行命令： npm run dev
若进行打包服务，则执行命令： npm run build
若要启动后台服务，则执行命令： npm run webserver

具体参数配置可参考package.json文件中scripts

## 项目工程目录
-build
  --dev-server.js: 启动打包实时编译服务和热加载服务
  --webpack-dev-server.js: 通过webpack-dev-server启动实时打包编译服务和热加载、代理服务
  --webpack-dev.conf.js: webpack开发环境配置文件
  --webpack.conf.js: webpack基础配置文件
-node_modules: 项目依赖库
-dist: 打包输出目录
-src
  --main.js: 打包执行入口文件
  --router.js: 路由文件
  --App.vue: 根组件
  --assets: 静态图片和字体文件
  --components
    ---container: 页面布局容器
    ---page：页面静态文件
-package.json: 项目描述文件
-index.html: 页面模板
-.eslintrc.js: 语法校验文件
-webserver.js: 后台服务文件
