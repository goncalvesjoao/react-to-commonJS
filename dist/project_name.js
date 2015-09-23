'use strict';

var _ = require('lodash');

function projectName(name) {
  var boilerplateName = {
    fullName: /MyReactComponent/g,
    camelCase: /myReactComponent/g,
    snakeCase: /my_react_component/g,
    screamCase: /MY_REACT_COMPONENT/g
  };

  return {
    fullName: _.capitalize(_.camelCase(name)),
    camelCase: _.camelCase(name),
    snakeCase: _.snakeCase(name),
    screamCase: name.toUpperCase(),
    boilerplateName: boilerplateName,
    replaceBoilerplateName: replaceBoilerplateName
  };
}

module.exports = projectName;

// ********************************* PROTECTED *********************************

function replaceBoilerplateName(string) {
  return string.replace(this.boilerplateName.fullName, this.fullName).replace(this.boilerplateName.camelCase, this.camelCase).replace(this.boilerplateName.snakeCase, this.snakeCase).replace(this.boilerplateName.screamCase, this.screamCase);
}