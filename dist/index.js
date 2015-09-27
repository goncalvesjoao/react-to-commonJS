'use strict';

function reactToCommonJS(name) {
  var projectName = require('./project_name')(name);

  return {
    name: projectName,
    npmInstall: require('./npm_install'),
    congratulations: require('./congratulations').bind(null, projectName),
    cloneBoilerplate: require('./clone_boilerplate').bind(null, projectName)
  };
}

module.exports = reactToCommonJS;