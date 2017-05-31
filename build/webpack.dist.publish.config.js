var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './examples/main'
    },
    output: {
        path: path.resolve(__dirname, '../examples'),
        filename: 'main.min.js',
    }
});
