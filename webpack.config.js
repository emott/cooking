const path = require('path');

module.exports = {
  entry: './js/index.js',

  mode: 'development',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  }
};