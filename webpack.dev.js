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
         template: require('html-webpack-template'),
         meta: [{
            name: 'description',
            content: 'MugStore - Best Bag Shop'
         }],
         mobile: true,
         lang: 'en-US',
         link: [
            'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700',
            'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js'
         ],
         bodyHtmlSnippet: '<div id="root"></div>',
      })
   ]
})