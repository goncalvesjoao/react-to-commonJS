'use strict';

var _ = require('lodash');
var fileUtils = require('./file_utils');

function cloneBoilerplate(projectName, sourceDir, destinationDir, options) {
  if (!options.force && fileUtils.exists(destinationDir)) {
    fail('\n  - Error: "' + destinationDir + '" already exists!\n');
  }

  fileUtils.copy(sourceDir, destinationDir, processFile.bind(null, projectName));

  _.each(['gitignore', 'eslintrc', 'npmignore'], function (fileName) {
    var hiddenFile = destinationDir + '/' + fileName;

    if (fileUtils.exists(hiddenFile)) {
      fileUtils.rename(hiddenFile, destinationDir + '/.' + fileName);
    }
  });
}

module.exports = cloneBoilerplate;

// ********************************* PROTECTED *********************************

function fail(message) {
  console.error(message);

  process.exit(1);
}

function processFile(projectName, newFile) {
  newFile.path = newFile.path.replace(projectName.boilerplateName.snakeCase, projectName.snakeCase);

  if (newFile.contents) {
    newFile.contents = projectName.replaceBoilerplateName(newFile.contents, projectName);
  }
}