const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: {
            plugins: [
              require('precss'),
              require('autoprefixer')
            ]}
          },
          { loader: 'less-loader', options: { javascriptEnabled: true } }
        ],
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
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ]
};