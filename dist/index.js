'use strict';

function reactToCommonJS(name) {
  var projectName = require('./project_name')(name);

  return {
    name: projectName,
    npmInstall: require('./npm_install'),
    congratulations: require('./congratulations').bind(null, projectName),
    cloneBoilerplate: require('./clone_boilerplate').bind(null, projectName),
    cloneBoilerplates: function cloneBoilerplates(destinationFolder, options) {
      this.cloneBoilerplate(__dirname + '/../boilerplates/basic', destinationFolder, options);

      if (options.css_modules) {
        options.force = true;
        this.cloneBoilerplate(__dirname + '/../boilerplates/css_modules', destinationFolder, options);
      }
    }
  };
}

module.exports = reactToCommonJS;