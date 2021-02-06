const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './index.js',
    newEvent: './newEvent.js',
    storage: './storage.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'calendar.html',
      template: './pages/calendar.html',
      chunks: ['index', 'storage'],
    }),
    new HTMLWebpackPlugin({
      filename: 'createEvent.html',
      template: './pages/createEvent.html',
      chunks: ['newEvent', 'storage'],

    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};
