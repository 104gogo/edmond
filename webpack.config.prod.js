const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [
    // '@babel/polyfill',
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
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'site/index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ]
};