const jQuery = require('jquery');

module.exports = {
  config: require('./config'),

  setConfig(newConfig) { jQuery.extend(this.config, newConfig); },

  components: require('./components'),
};
