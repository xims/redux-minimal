module.exports = require('./webpack.config.js');    // inherit from the main config file


var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// // export css to a separate file
module.exports.module.loaders[1] = {
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract('css!sass')
};


// production env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  })
);

// compress the js file
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false
    }
  })
);
