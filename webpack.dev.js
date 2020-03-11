const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPluin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPluin({
      title: 'MugStore',
      inject: false,
      template: './src/index.html'
    })
  ]
})