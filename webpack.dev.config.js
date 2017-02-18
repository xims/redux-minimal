module.exports = require('./webpack.config.js');    // inherit from the main config file


var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// // export css to a separate file
module.exports.module.loaders[1] = {
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract('css!sass')
};
