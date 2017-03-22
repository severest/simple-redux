var path = require('path');
var Webpack = require('webpack');

module.exports = {
    watch: true,
    devtool: 'eval',
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
};
