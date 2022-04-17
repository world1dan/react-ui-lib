const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    entry: "./src/docs/index.tsx",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve("babel-loader"),
                    },
                ],
            },
        ],
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", "jsx"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",

    devServer: {
        static: {
            directory: path.resolve(__dirname, "build"),
        },
        port: 4200,
        hot: true,
        historyApiFallback: true,
    },
};
