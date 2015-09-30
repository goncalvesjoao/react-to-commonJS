var myReactComponentPackageJson = require('../../package.json');

var myReactComponentConfig = {
  'name': myReactComponentPackageJson.name,
  'version': myReactComponentPackageJson.version,
  'author': myReactComponentPackageJson.author,
  'repository': myReactComponentPackageJson.repository,
  'description': myReactComponentPackageJson.description,

  baseHref: '/',
};

module.exports = {

  appConfig: {
    production: require('./environments/production')(myReactComponentConfig),
    development: require('./environments/development')(myReactComponentConfig),
  },

  eslint: true,

  serverPort: 9000,

  vendorDependencies: Object.keys(myReactComponentPackageJson.dependencies),

};
