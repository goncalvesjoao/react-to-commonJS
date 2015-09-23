'use strict';

var fileUtils = require('./file_utils');

function cloneBoilerplate(projectName, destinationFolder) {
  console.log('\n  - Creating your react module ...');

  if (fileUtils.exists(destinationFolder)) {
    fail('\n  - Error: "' + destinationFolder + '" already exists!\n');
  }

  fileUtils.copy(__dirname + '/../boilerplate', destinationFolder, processFile.bind(null, projectName));

  fileUtils.rename(destinationFolder + '/gitignore', destinationFolder + '/.gitignore');

  fileUtils.rename(destinationFolder + '/eslintrc', destinationFolder + '/.eslintrc');

  fileUtils.rename(destinationFolder + '/npmignore', destinationFolder + '/.npmignore');
  console.log('  - Done');
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