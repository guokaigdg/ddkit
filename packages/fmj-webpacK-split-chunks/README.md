<!--
 * @file: 
 * @Author: guokai
 * @Date: 2021-04-23 10:32:11
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-23 14:09:33
-->
理解webpack4 splitchunks

## 启动默认 async 模式, 单文件入口
```
npm run default
```
输出结果
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

### 2.通用vendors如何提取到一个入口vendors~xxx.chunk.js中?
- xxx
### 3.通用vendors如何提取到一个入口vendors~xxx.chunk.js中?
- xxx
### 4.引用打包随意放置制定文件夹? 
- xxx