const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  configureWebpack: {
    devtool: "source-map"
  },
  transpileDependencies: true,
});
