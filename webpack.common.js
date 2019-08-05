const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    js: ['babel-polyfill', './UI/src/index.jsx'],
    vendor: ['react'],
  },
  output: {
    path: path.join(__dirname, './UI/dist'),
    filename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './UI/index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin([{
      from: './UI/src/imgs/favicon.png',
    }]),
  ],
  module: {
    rules: [
      {
        test: /\.js?$|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-arrow-functions',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader'],
      },
    ],
  },
};
