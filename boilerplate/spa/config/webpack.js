var _ = require('lodash');
var config = require('./spa');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: '../js/index.js',
    vendor: _.union(config.myReactComponent.vendor, [
      'react',
      'react-router',
      'react-css-modules',
      'react-bootstrap',
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
    ]),
  },

  output: {
    path: __dirname + '/../js/',
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id]' + (+(new Date())) + '-chunk.js',
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.json$/,
        include: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),

    new ExtractTextPlugin('css/react_css_modules.css', { allChunks: true }),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.OldWatchingPlugin(),

    new webpack.NoErrorsPlugin(),
  ],
};
