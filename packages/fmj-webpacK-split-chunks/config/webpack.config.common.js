const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split('/')
          .reduceRight((item) => item);
        const allChunksNames = chunks.map((item) => item.name).join('~>');
        return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
      },
      chunks: 'all',   // 拆分范围:  三种模式 async (不拆分入口文件)| initial (只拆分入口文件) | all (拆分所有文件)
      minSize: 30000,  // 生成块的最小大小(以字节为单位)。
      minChunks: 1,   //  包被引用 >=1 次, 就会进行chunk模块进行拆分, (默认的minChunks=1)
      maxAsyncRequests: 5, // 异步模块(非入口模块)内部的并行最大请求数的 ()
      maxInitialRequests: 3,  //入口模块并行加载最大请求数 (入口文件拆分不超过3个文件, 拆分出太多模块导致请求数量过多而得不偿失)
      automaticNameDelimiter: '~',  // 生成的名称的分隔符
      name: true, // 当chunk没有名字时，通过splitChunks分出的模块的名字用id替代，当然你也可以通过name属性自定义
      // name: '拆分出来的',  //可以对拆分出来的文件合并然后重命名
      cacheGroups: {
        vendors: {
          // minChunks: 1,  //  第三方包被引用 >=1 次, 就会进行chunk模块进行拆分, (默认的minChunks=1)
          test: /[\\/]node_modules[\\/]/,  // 只筛选从node_modules文件夹下引入的模块
          priority: -10  // 权重
        },
        default: {
          minChunks: 2,   // 本地包被引用 >=2 次, 就会进行chunk模块进行拆分,, 权重小于vendors (对比priority)
          priority: -20,   // 权重, 先vendors引用包, 再找本地包,  因为default 权重小于vendors 
          reuseExistingChunk: true
          // reuseExistingChunk: false 
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