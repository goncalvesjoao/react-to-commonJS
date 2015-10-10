function congratulations(config) {
  const project = require('./project')(config);

  console.info('\n  - Congrats! Your react module is ready to be built.');
  console.info('\n  Get started by:');
  console.info('    1. "cd ' + project.name.kebabCase + '" into your new project\'s directory');
  console.info('    2. Start writing your devilish code:');
  console.info('      * "npm run build" - will use babel to transpile jsx and es6 code to plain es5 javascript to the "dist" folder');
  console.info('      * "npm start" - starts a web server at "http://localhost:9000" with a single page app that will require your already transpiled react module.');
  console.info('      * "npm test"  - will use mocha to run all "' + project.name.kebabCase + '/test" files');
  console.info('');
}

module.exports = congratulations;
