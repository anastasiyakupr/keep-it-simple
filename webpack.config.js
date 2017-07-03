const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        lib: Object.keys(pkg.dependencies),
        app: ['./js/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash:5].js'
    },
    resolve: {
        alias: {
            api: './api/' + (process.env.API || 'mock')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            minChunks: Infinity
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('css/[name].[contenthash:5].css')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
                include: path.resolve(__dirname, 'src', 'js'),
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
};
