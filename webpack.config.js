var debug = process.env.NODE_ENV !== "production";

var devConfig = require('./configs/dev.config');
var prodConfig = require('./configs/prod.config');
var baseConfig = require('./configs/base.config');

module.exports = Object.assign({}, baseConfig, debug ? devConfig : prodConfig);