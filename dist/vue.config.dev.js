"use strict";

// 新增一隻名為 vue.config.js 的檔案在專案的根目錄
var webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'windows.jQuery': 'jquery'
    })]
  },
  pages: {
    index: {
      // 頁面目錄
      entry: "src/views/index/main.js",
      // 頁面模板
      template: "src/views/index/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "首頁" // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      // chunks: ["chunk-vendors", "chunk-common", "index"]

    }
  }
};