import {Configuration} from 'webpack';
import HtmlWebpackPlugin = require("html-webpack-plugin");
import postcssNested = require('postcss-nested');

const config: Configuration = {
  mode: "development",
  entry: './entry.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.pcss$/,
      use: [
        'style-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [postcssNested()]
          }
        }
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

export default config;
