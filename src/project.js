const _ = require('lodash');

function project(config) {
  const snakeCase = _.snakeCase(config.name);
  const camelCase = _.camelCase(config.name);
  const kebabCase = snakeCase.replace(/_/g, '-');
  const pascalCase = _.capitalize(camelCase);
  const screamCase = config.name.toUpperCase();
  const boilerplateName = config.boilerplateName;
  
  return {
    destinationDir: config.destinationDir + kebabCase,
    name: {
      camelCase,
      snakeCase,
      kebabCase,
      pascalCase,
      screamCase,
      boilerplateName,
      replaceBoilerplateName,
    },
  };
}

module.exports = project;

// ********************************* PROTECTED *********************************

function replaceBoilerplateName(string) {
  return string
    .replace(this.boilerplateName.pascalCase, this.pascalCase)
    .replace(this.boilerplateName.camelCase, this.camelCase)
    .replace(this.boilerplateName.snakeCase, this.snakeCase)
    .replace(this.boilerplateName.kebabCase, this.kebabCase)
    .replace(this.boilerplateName.screamCase, this.screamCase);
}
