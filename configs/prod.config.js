const baseConfig = require('./base.config.js');
const webpack = require('webpack');
const path = require('path');

const jsUglify = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    comments: false,
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: false,
        evaluate: false,
        if_return: true,
        join_vars: true,
    },
});

baseConfig.plugins.push(jsUglify);

const prodConfig = Object.assign({}, baseConfig, {

    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].min.js",
        publicPath: '/'
    },

    plugins: baseConfig.plugins
});

module.exports = prodConfig;