const path = require('path'),
    pkg = require('./package.json'),
    webpack = require('webpack'),
    HtmlPlugin = require('html-webpack-plugin');


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
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
                include: path.resolve(__dirname, 'src', 'js'),
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015'],
                    env: {
                        development: {
                            presets: ['react-hmre']
                        }
                    }
                }
            }
        ]
    }
};