const prod = process.env.NODE_ENV && process.env.NODE_ENV.startsWith('prod');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new HtmlPlugin({
        template: path.resolve(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin('css/[name].[hash:5].css'),
    new webpack.NoEmitOnErrorsPlugin()
];

if (prod) {
    plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new UglifyJsPlugin());
}

module.exports = {
    mode: prod ? 'production' : 'development',
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
    plugins: plugins,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'lib',
                    minSize: 0
                }
            }
        }
    },
    module: {
        rules: [{
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
                use: ['css-loader']
            })
        }
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
        host: '0.0.0.0',
        compress: true
    }
};
