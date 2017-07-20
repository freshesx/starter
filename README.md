<p><img width="320" src="https://raw.githubusercontent.com/HumanUI/vue-human/master/docs/vue-human.jpg"></p>

<div>
  <span title="version">
    <img src="https://img.shields.io/badge/vue--cli%20%E6%A8%A1%E6%9D%BF-v1.0.0--beta.1-orange.svg">
  </span>
</div>

# 如何快速生成 Human 项目

## 准备工作（如果已经完成可以跳过）

``` bash
# 安装 nrm 用于管理 npm 源的版本，国外用户可以忽略
$ npm install -g nrm
$ nrm use taobao

# 修改你本地一些库的镜像，国外用户可以忽略
$ npm config edit

# 然后添加如下内容
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/

# 添加后保存退出，具体查看该链接 [镜像](./docs/mirror.md)

# 安装 yarn，如果你已经安装完成，可以跳过。
$ npm install -g yarn

# 安装 vue-cli，如果你已经安装完成，可以跳过。
$ npm install -g vue-cli
```

## 核心使用方法

``` bash
# 下载 HumanUI/webpack 模板
$ vue init HumanUI/starter my-project

# 如果安装完成，你将会看到一些提示文字
$ cd my-project

# 进入文件夹后，先初始化，通过以下命令初始化，这步将创建你本地的配置文件，
# 初始化 git 仓库，以及安装 package 依赖包
$ yarn run first

# 通过游览器内打开 localhost:8080 以游览你的项目
$ yarn start
```

# 我们增加了哪些包

- vue-router
- vuex
- axios
- sass-loader
- node-sass
- sass-resource-loader
- vue-human
- vue-human-env
- vue-human-icons

# 相关资料

[常见 install 失败的解决方法：设置镜像](./docs/mirror.md)
