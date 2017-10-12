const baseConfig = require('./base.config.js');
const path = require('path');

const devConfig = Object.assign({}, baseConfig, {

    devtool: "#eval-source-map",

    entry: {
        main: [
            './js/main.js',
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "../src"),
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },

});

module.exports = devConfig;