/**
 * Created by kusaka on 2017/07/08.
 */
const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
  entry: {
    app: resolve('./app/index.js')
  },

  devtool: 'source-map',

  module: {
  },

  resolve: {
  }
};