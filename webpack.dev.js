/**
 * @file webpack 开发配置
 * @author leon <lupengyu@baidu.com>
 */

const webpack = require('webpack');

const config = {
    entry: [
        'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
        './src/index'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style'
                + '!css-loader'
                + '?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        }, {
            test: /\.png|\.svg$/,
            loaders: ['file-loader']
        }]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:9000/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};


module.exports = config;
