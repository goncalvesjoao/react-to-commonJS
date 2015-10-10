var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/my-react-component/',
  });

}

module.exports = productionConfig;
