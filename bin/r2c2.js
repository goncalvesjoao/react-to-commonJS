#!/usr/bin/env node
'use strict';

const commander = require('commander');
const reactToCommonJS = require('../dist');

function newCommand(projectName, options) {
  const newProject = reactToCommonJS(projectName);
  const destinationFolder = process.cwd() + '/' + newProject.name.snakeCase;

  console.log('\n  - Creating your React project ...');
  newProject.cloneBoilerplates(destinationFolder, options);
  console.log('  - Done\n');

  if (!options.noinstall) {
    newProject.npmInstall(destinationFolder, newProject.congratulations);
  }
}

function unknownCommand() {
  console.log('unknown command');
}

commander.version(require('../package.json').version);

commander.command('new <my-react-component>')
         .description('- generates a <my-react-component> folder with standard node and react tools : r2c2 new my-react-component')
         .option('-f, --force', 'will not stop if your destination matches an existing project')
         .option('-n, --noinstall', 'bypasses the npm install operation')
         .option('-c, --css_modules', 'the small React example will be configured with react-css-modules')
         .action(newCommand);

commander.command('*')
         .description('- unknown command')
         .action(unknownCommand);

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
