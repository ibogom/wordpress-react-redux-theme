const baseConfig = require('./base.config.js');

const devConfig = Object.assign({}, baseConfig, {

    devtool: "#eval-source-map"

});

module.exports = devConfig;