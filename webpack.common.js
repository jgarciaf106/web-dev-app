const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    './src/front/ts/index.tsx'
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.(css|scss)$/, use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // translates CSS into CommonJS
        }]
        }, //css only files
        {
          test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        }, //for images
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        favicon: 'react-ts.ico',
        template: 'template.html'
    }),
    new Dotenv({ safe: true, systemvars: true })
  ]
};