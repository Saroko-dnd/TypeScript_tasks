const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        task_1: "./src/index.ts",
        namespaces: "./src/NamespaceDemo/index.ts"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
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
        inline: true,
        contentBase: "./dist",
        publicPath: "/",
        open: true,
        historyApiFallback: {
            index: "index.html"
        }
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
