/**
 *
 */
const webpack = require('webpack');
const path = require('path');

/**
 * Webpack Plugin Declarations
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack Configuration
 */
const config = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  plugins: [

  ]
};

module.exports = config;
