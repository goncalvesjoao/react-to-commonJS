var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/docs/',
  });

}

module.exports = productionConfig;
