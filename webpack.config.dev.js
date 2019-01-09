const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './site/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  devServer: {
    port: '8899',
    contentBase: './site',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'site/index.html'
    }),
  ]
};