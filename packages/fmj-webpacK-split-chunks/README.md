<!--
 * @file: 
 * @Author: guokai
 * @Date: 2021-04-23 10:32:11
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-23 14:09:33
-->
# 理解Webpack4用分块策略(common chunk strategy) webpack4 splitchunks
- 最初，chunks（以及内部导入的模块）是通过内部 webpack 图谱中的父子关系关联的。CommonsChunkPlugin 曾被用来避免他们之间的重复依赖，但是不可能再做进一步的优化。从 webpack v4 开始，移除了 CommonsChunkPlugin，取而代之的是 optimization.splitChunks。
![webpack](https://raw.githubusercontent.com/guokaigdg/image-hosting/master/20210423/webpack.splitChunks.5n5ar05u7a0.jpeg)


```js
module.exports =  {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/entry1.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
optimization: {
    splitChunks: {
        chunks: 'all',   // 拆分范围:  三种模式 async (不拆分入口文件)| initial (只拆分入口文件) | all (拆分所有文件) 默认async
        minSize: 30000,  // 生成 chunk 的最小体积（以 bytes 为单位）。
        minChunks: 1,   //  包被引用 >=1 次, 就会进行chunk模块进行拆分, (默认的minChunks=1)
        maxAsyncRequests: 5, // 异步模块(非入口模块)内部的并行最大请求数的 ()
        maxInitialRequests: 3,  //入口模块并行加载最大请求数 (入口文件拆分不超过3个文件, 拆分出太多模块导致请求数量过多而得不偿失)
        automaticNameDelimiter: '~',  // 生成的名称的分隔符
    //   name: true, // 当chunk没有名字时，通过splitChunks分出的模块的名字用id替代，当然你也可以通过name属性自定义
      // name: '拆分出来的',  //可以对拆分出来的文件合并然后重命名
        cacheGroups: {
            vendors: {
            // minChunks: 1,  //  第三方包被引用 >=1 次, 就会进行chunk模块进行拆分, (默认的minChunks=1)
            test: /[\\/]node_modules[\\/]/,  // 只筛选从node_modules文件夹下引入的模块
            priority: -10,  // 权重
            },
            default: {
            minChunks: 2,   // 本地包被引用 >=2 次, 就会进行chunk模块进行拆分,, 权重小于vendors (对比priority)
            priority: -20,   // 权重, 先vendors引用包, 再找本地包,  因为default 权重小于vendors 
            reuseExistingChunk: true,
            }
        }
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new BundleAnalyzerPlugin(),
  ]
}
```
## 启动默认 async 模式, 单文件入口
```
npm run default
```
## 启动默认 async 模式, 多文件入口
```
npm run entry2
```
## 测试maxInitialRequests
```
npm run maxInitialRequests
```
## 测试maxAsyncRequests
```
npm run maxAsyncRequests
```
### 输出结果
![one-entry](https://raw.githubusercontent.com/guokaigdg/image-hosting/master/20210423/one-entry.p85dowos3ww.jpg)

### 当父chunk和子chunk同时引入相同的module时? 

- 当父chunk和子chunk同时引入相同的module时，并不会将其分割出来而是删除掉子chunk里面共同的module，保留父chunk的module，这个是因为 optimization.removeAvaliableModules 默认是true

### 通用vendors如何提取到一个vendors(指定的)?
- todo

### 默认cacheGroups, 第三方包被引用 `>= 1`次则会被拆分, 本地包被引用本超过 `>=2` 则会被拆分,
```js
cacheGroups: {
    vendors: {
        // minChunks: 1,  // 第三方包被引用 >=1 次, 就会进行chunk模块进行拆分, (默认的minChunks=1)
        test: /[\\/]node_modules[\\/]/,  // 只筛选从node_modules文件夹下引入的模块
        priority: -10
    },
    default: {
        minChunks: 2,   // 本地包被引用 >=2 次, 就会进行chunk模块进行拆分,, 权重小于vendors (对比priority)
        priority: -20,  // 权重, 先vendors引用包, 再找本地包,  因为default 权重小于vendors 
        reuseExistingChunk: true  //先vendors引用包, 再找本地包
    }
}
```

### 1.打包文件重命名?
- 当chunk没有名字时，通过splitChunks分出的模块的名字用id替代，当然你也可以通过name属性自定义
> 在为不同的拆分 chunk 分配相同的名称时，所有 vendor 模块都放在一个共享的 chunk 中，尽管不建议这样做，因为这可能会导致下载更多代码。

splitChunks.usedExports 

```js
optimization: {
    splitChunks: {
        ...
      - name: true, // 当chunk没有名字时，通过splitChunks分出的模块的名字用id替代，当然你也可以通过name属性自定义 ~~
      + name: '拆分出来的',  //可以对拆分出来的文件合并然后重命名 
        cacheGroups: {
            vendors: {
                ...
            },
            default: {
                ...
            }
        }
    },
},
```

### 2.通用vendors如何提取到一个入口vendors~xxx.chunk.js中?
-     maxAsyncRequests: 5, // 异步模块(非入口模块)内部的并行最大请求数的 ()
      maxInitialRequests: 3,  //入口模块并行加载最大请求数 (入口文件拆分不超过3个文件, 拆分出太多模块导致请求数量过多而得不偿失)