var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    entry: path.join(__dirname, '/app/js/app.js'),

    output: {
        path: path.resolve(__dirname, '../src/main/resources/static'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    plugins: [HTMLWebpackPluginConfig]
};
