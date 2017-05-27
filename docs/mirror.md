# 为 node-sass、phantomjs、electron 设置镜像

说明：sass 的编译依赖 node-sass，测试库依赖 phantomjs，所以必须设置镜像，不然项目 yarn install 过程中会发生失败。

``` bash
# Mac 和 windows 用户均可以通过 npm config edit 命令打开 .npmrc 文件并修改该文件
# 较旧版本的 npm 可能没有 config edit 方法，只能手动查找 .npmrc 以修改
# 目前没有 yarn config edit 方法，所以请使用 npm 实现
$ npm config edit
```

``` bash
# 打开后添加如下语句，便可以设置镜像
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
```

参考文章：
https://github.com/lmk123/blog/issues/28
https://www.npmjs.com/package/phantomjs#deciding-where-to-get-phantomjs
https://docs.npmjs.com/files/npmrc
https://cnodejs.org/topic/538ed941c3ee0b5820889f66
