module.exports = {

  serverPort: 9000,

  eslint: true,

  myReactComponent: {
    vendor: Object.keys(require('../../package.json').dependencies),
  },

};
