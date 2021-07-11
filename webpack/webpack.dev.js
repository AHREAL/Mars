const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
});
