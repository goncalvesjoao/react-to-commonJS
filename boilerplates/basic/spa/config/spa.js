var _ = require('lodash');
var myReactComponentPackageJson = require('../../package.json');
var application = _.pick(myReactComponentPackageJson,
  ['name', 'version', 'author', 'repository', 'description']);

module.exports = {

  appConfig: {
    development: _.assign({}, application, {
      baseHref: '/',
      url: 'http://localhost:9090/',
      environment: 'development',
    }),

    production: _.assign({}, application, {
      baseHref: '/',
      environment: 'production',
    }),
  },

  eslint: true,

  serverPort: 9000,

  MyReactComponent: {
    vendor: Object.keys(myReactComponentPackageJson.dependencies),
  },

};
