const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPluin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist/js', 'dist/css'],
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.css"
    }),
    new HtmlWebpackPluin({
      title: 'MugStore',
      inject: false,
      template: './src/index.html'
    })
  ]
});