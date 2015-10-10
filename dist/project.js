'use strict';

var _ = require('lodash');

function project(config) {
  var snakeCase = _.snakeCase(config.name);
  var camelCase = _.camelCase(config.name);
  var kebabCase = snakeCase.replace(/_/g, '-');
  var pascalCase = _.capitalize(camelCase);
  var screamCase = config.name.toUpperCase();
  var boilerplateName = config.boilerplateName;

  return {
    destinationDir: config.destinationDir + kebabCase,
    name: {
      camelCase: camelCase,
      snakeCase: snakeCase,
      kebabCase: kebabCase,
      pascalCase: pascalCase,
      screamCase: screamCase,
      boilerplateName: boilerplateName,
      replaceBoilerplateName: replaceBoilerplateName
    }
  };
}

module.exports = project;

// ********************************* PROTECTED *********************************

function replaceBoilerplateName(string) {
  return string.replace(this.boilerplateName.pascalCase, this.pascalCase).replace(this.boilerplateName.camelCase, this.camelCase).replace(this.boilerplateName.snakeCase, this.snakeCase).replace(this.boilerplateName.kebabCase, this.kebabCase).replace(this.boilerplateName.screamCase, this.screamCase);
}