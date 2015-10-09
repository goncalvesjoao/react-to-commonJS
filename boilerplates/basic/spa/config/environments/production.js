var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/my_react_component/',
  });

}

module.exports = productionConfig;
