function npmInstall(destinationFolder, callback) {
  const execute = require('child_process').exec;

  console.log('  - Running "npm install" ...');

  process.chdir(destinationFolder);

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
