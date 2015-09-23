'use strict';

function npmInstall(destinationFolder, callback) {
  var execute = require('child_process').exec;

  console.log('\n  - Running "npm install" ...');

  process.chdir(destinationFolder);

  execute('npm install', function (error, stdout, stderr) {
    if (error) {
      console.info(stdout);
      console.warn('WARNING: "npm install" failed! You might try again later, inside your project directory');
      console.error(stderr);
    } else {
      console.log('  - Done');

      callback();
    }
  });
}

module.exports = npmInstall;