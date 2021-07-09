const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html'),
      favicon: path.join(__dirname, '..', 'public', 'favicon.ico'),
    }),
    new DefinePlugin({
      'ENV': JSON.stringify(process.env.ENV),
    }),
  ],
  stats: 'errors-only',
};
