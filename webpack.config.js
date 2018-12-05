// @flow
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const glob = require("glob");

const CSS_LOADER_CONFIG = [
  {
    loader: "style-loader",
    options: {
      sourceMap: true,
    },
  },
  {
    loader: "css-loader",
    options: {
      sourceMap: true,
    },
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: true,
      includePaths: glob.sync(
        path.join(__dirname, "**/node_modules/@material")
      ).map(dir => path.dirname(dir)),
    },
  },
];

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: CSS_LOADER_CONFIG,
      },
      {
        test: /\.css$/,
        use: CSS_LOADER_CONFIG,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html",
    }),
    new WebpackMd5Hash(),
  ],
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
};
