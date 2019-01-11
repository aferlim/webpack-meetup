const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
