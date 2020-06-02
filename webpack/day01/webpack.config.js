const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8081
    },
    entry: {
        index: './src/js/index.js',
        main: './src/js/main.js'
    },
    output: {
        filename: '[name]_[chunkhash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         injectType: 'singletonStyleTag'
                    //     }
                    // }
                    MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'
                ]
            }, {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 8192
                    }
                }
            }, {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'hello world',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]_[chunkhash:8].css'
        })
    ]
}