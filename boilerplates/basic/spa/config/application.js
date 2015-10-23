var myReactComponentPackageJson = require('../../package.json');

module.exports = {

  appConfig: require('./environments')({
    'name': myReactComponentPackageJson.name,
    'author': myReactComponentPackageJson.author,
    'version': myReactComponentPackageJson.version,
    'repository': myReactComponentPackageJson.repository,
    'description': myReactComponentPackageJson.description,

    baseHref: '/',
  }),

  eslint: true,

  serverPort: 9000,

  vendorDependencies: Object.keys(myReactComponentPackageJson.dependencies),

};
