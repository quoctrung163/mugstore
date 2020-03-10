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
      }]
   }
}