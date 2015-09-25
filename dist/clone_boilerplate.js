'use strict';

var fileUtils = require('./file_utils');

function cloneBoilerplate(projectName) {

  return { basic: basic, cssModules: cssModules };

  // ******************************** PROTECTED ********************************

  function basic(options, destinationFolder) {
    console.log('\n  - Creating your React project ...');

    if (!options.force && fileUtils.exists(destinationFolder)) {
      fail('\n  - Error: "' + destinationFolder + '" already exists!\n');
    }

    fileUtils.copy(__dirname + '/../boilerplates/basic', destinationFolder, processFile.bind(null, projectName));

    fileUtils.rename(destinationFolder + '/gitignore', destinationFolder + '/.gitignore');

    fileUtils.rename(destinationFolder + '/eslintrc', destinationFolder + '/.eslintrc');

    fileUtils.rename(destinationFolder + '/npmignore', destinationFolder + '/.npmignore');

    console.log('  - Done\n');
  }

  function cssModules(destinationFolder) {
    fileUtils.copy(__dirname + '/../boilerplates/css_modules', destinationFolder, processFile.bind(null, projectName));
  }
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