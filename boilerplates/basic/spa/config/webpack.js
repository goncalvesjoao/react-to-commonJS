var _ = require('lodash');
var webpack = require('webpack');
var spaConfig = require('./spa');

var config = {
  entry: { index: './js/index.js' },
  output: {
    path: __dirname + '/js/',
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id]' + (+(new Date())) + '-chunk.js',
  },
  module: {
    preLoaders: [],
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.json$/, include: /\.json$/, loaders: ['json-loader'] }
    ]
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  plugins: []
};

enableEslint(config);
enableVendor(config);
enableCssModules(config);
enableHotReload(config);

module.exports = config;

// ********************************* PROTECTED *********************************

function enableEslint(config) {
  if (!spaConfig.eslint) { return false; }

  try {
    require.resolve('eslint-loader');
  } catch(error) {
    return false;
  }

  config.module.preLoaders.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  });

  config.module.preLoaders.push({
    test: /\.jsx$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  });
}

function enableVendor(config) {
  config.entry.vendor = _.union(spaConfig.myReactComponent.vendor, [
    'react',
    'react-router',
    'react-css-modules',
    'react-bootstrap',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
  ]);

  config.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'))
}

function enableCssModules(config) {
  var ExtractTextPlugin = require('extract-text-webpack-plugin');

  config.module.loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
  });

  config.plugins.push(new ExtractTextPlugin('css/react_css_modules.css', { allChunks: true }));
}

function enableHotReload(config) {
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.OldWatchingPlugin());
  config.plugins.push(new webpack.NoErrorsPlugin());
}
