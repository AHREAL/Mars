const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack');
const SourcePath = path.join(__dirname, '..', 'src');
const DistPath = path.join(__dirname, '..', 'dist');

module.exports = {
  entry: path.join(SourcePath, 'index.tsx'),
  output: {
    path: DistPath,
    filename: '[contenthash].js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '@': path.join(SourcePath),
      '@cpn': path.join(SourcePath, 'components'),
      '@page': path.join(SourcePath, 'pages'),
      '@hook': path.join(SourcePath, 'hooks'),
      '@router': path.join(SourcePath, 'router'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
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
