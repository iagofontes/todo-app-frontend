const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
        // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        // url-loader?limit=10000&mimetype=application/font-woff
        ]
        // }, {
        //     test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        //     loader: 'url-loader?limit=100000'
        // }]
    }
}