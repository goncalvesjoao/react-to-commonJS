const _ = require('lodash');
const fileUtils = require('./file_utils');

function cloneBoilerplate(config, sourceDir, options) {
  const project = require('./project')(config);

  if (!options.force && fileUtils.exists(project.destinationDir)) {
    fail('\n  - Error: "' + project.destinationDir + '" already exists!\n');
  }

  fileUtils.copy(sourceDir,
                 project.destinationDir,
                 processFile.bind(null, project.name));

  _.each(['gitignore', 'eslintrc', 'npmignore'], function(fileName) {
    const hiddenFile = project.destinationDir + '/' + fileName;

    if (fileUtils.exists(hiddenFile)) {
      fileUtils.rename(hiddenFile, project.destinationDir + '/.' + fileName);
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
  newFile.path = newFile.path.replace(projectName.boilerplateName.snakeCase,
                                      projectName.snakeCase);

  if (newFile.contents) {
    newFile.contents = projectName.replaceBoilerplateName(newFile.contents,
                                                          projectName);
  }
}
