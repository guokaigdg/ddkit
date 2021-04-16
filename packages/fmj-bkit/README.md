# bkit 脚手架

```
    __    __   _ __
   / /__ / /__(_) /_
  / _ _ \/ //_/ / __/
 / /_/ / ,< / / /_
/_.___/_/|_/_/\___/

```

## 📦 安装

```
npm install -g bkit

//or

yarn global add bkit
```

## 创建项目

```
bkit create my-app
```

## 命令

```
bkit -v 查询版本号
bkit --help 获取帮助
bkit update 检查更新
```

## 本地开发

```
npm link

之后正常使用bkit 命令
```

## 工具

-   commander （Node 的命令行解析库）
-   inquirer （实现命令行之间的交互）
-   fs-extra （基础文件操作库）
-   chalk （粉笔:控制台字符颜色样式）
-   ora （优雅的进度条）
-   download （实现文件远程下载）
-   handlebars （实现模板字符替换）
-   log-symbols （为各种日志级别提供着色符号）
-   update-notifier （npm 在线检查更新）

```
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN bkit@1.0.0 No description
npm WARN bkit@1.0.0 No repository field.

removed 3 packages and audited 164 packages in 2.957s

25 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

/usr/local/bin/bkit -> /usr/local/lib/node_modules/bkit/bin/index
/usr/local/lib/node_modules/bkit -> /Users/guokai/Desktop/DIDI/bkit
```

## Todo

```
eslint Tslint 百度这边的规范
```
