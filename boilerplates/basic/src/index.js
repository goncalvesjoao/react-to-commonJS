const config = require('./config');
const jQuery = require('jquery');

module.exports = {
  get config() { return config; },
  set config(newConfig) { jQuery.extend(config, newConfig); },

  components: require('./components'),
};
