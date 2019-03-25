const webpack = require('webpack');
const path = require('path'); // 引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, './src/index.js')  // index.js作为打包的入口
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, './node_modules'),  // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // 输出文件
  output: {
    path: path.join(__dirname, './dist'), // 打包好之后的输出路径
    publicPath: '/',
    filename: "[name].[hash].js", // 这里的 name 对应入口文件里的值
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
