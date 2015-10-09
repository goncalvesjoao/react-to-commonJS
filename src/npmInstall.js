function npmInstall(config, callback) {
  const project = require('./project')(config);
  const execute = require('child_process').exec;

  process.chdir(project.destinationDir);

  execute('npm install', (error, stdout, stderr) => {
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
