const path = require('path');

module.exports = {
   entry: ['./src/index.js', './src/index.scss'],
   output: {
      filename: 'js/index.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test: /\.(js|jsx)$/,
         loader: 'babel-loader',
         exclude: [/node_modules/]
      }, {
         test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
         use: [
            {
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
               }
            }
         ],
         exclude: [/node_modules/]
      }, {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
            'file-loader',
         ],
         exclude: [/node_modules/]
      }]
   },
   performance: {
      hints: process.env.NODE_ENV === 'production' ? "warning" : false
   },
}