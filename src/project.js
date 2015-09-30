const _ = require('lodash');

function project(config) {
  return {
    destinationDir: config.destinationDir + _.snakeCase(config.name),
    name: {
      fullName: _.capitalize(_.camelCase(config.name)),
      camelCase: _.camelCase(config.name),
      snakeCase: _.snakeCase(config.name),
      screamCase: config.name.toUpperCase(),
      boilerplateName: config.boilerplateName,
      replaceBoilerplateName: replaceBoilerplateName,
    },
  };
}

module.exports = project;

// ********************************* PROTECTED *********************************

function replaceBoilerplateName(string) {
  return string.replace(this.boilerplateName.fullName, this.fullName)
               .replace(this.boilerplateName.camelCase, this.camelCase)
               .replace(this.boilerplateName.snakeCase, this.snakeCase)
               .replace(this.boilerplateName.screamCase, this.screamCase);
}
