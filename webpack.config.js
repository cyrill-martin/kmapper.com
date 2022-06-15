const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    handleLanguage: "./webpack/handleLanguage.js",
    jsDemo: "./webpack/jsDemo.js",
    interaction: "./webpack/interaction.js",
    cookieconsent: "./webpack/cookieconsent.js"
  },
  output: {
    path: path.resolve(__dirname, "./src/assets/js/"),
    library: "kmapper",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
