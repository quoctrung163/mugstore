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
         title: 'Webpack React Example',
         inject: false,
         template: require('html-webpack-template'),
         meta: [{
            name: 'description',
            content: 'A better default template for html-webpack-plugin.'
         }],
         mobile: true,
         lang: 'en-US',
         link: [
            'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700'
         ],
         bodyHtmlSnippet: '<div id="root"></div>',
         filename: 'index.html'
      })
   ]
});