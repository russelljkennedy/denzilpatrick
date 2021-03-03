const path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './lib/custom.js']
  },
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
