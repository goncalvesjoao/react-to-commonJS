var myReactComponentPackageJson = require('../../package.json');

module.exports = {

  html: {
    baseHref: '/',
    title: myReactComponentPackageJson.name,
    author: myReactComponentPackageJson.author,
    description: myReactComponentPackageJson.description,
  },

  eslint: true,

  serverPort: 9000,

  MyReactComponent: {
    vendor: Object.keys(myReactComponentPackageJson.dependencies),
  },

};
