const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // css
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },      
      // use babel for all js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // leave all teh images as they are for now
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    // clean dist folder before each build
    new CleanWebpackPlugin(['dist']),

    // use index.html as a template
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
  ],

  optimization: {
    minimizer: [
      // minify js
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
      }),
    ],
  },
};
