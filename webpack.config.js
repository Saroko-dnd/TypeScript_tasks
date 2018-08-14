const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.ts"),
  output: {
    filename: "./dist/main.js",
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: {
              fix: true,
              tsConfigFile: "./tsconfig.json"
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: "./dist",
    open: true,
    historyApiFallback: {
      index: "index.html"
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
