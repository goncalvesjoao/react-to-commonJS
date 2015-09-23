#!/usr/bin/env node

const commander = require('commander');
const reactToCommonJS = require('../dist');

function newCommand(projectName) {
  const newProject = reactToCommonJS(projectName);
  const destinationFolder = process.cwd() + '/' + newProject.name.snakeCase;

  newProject.cloneBoilerplate(destinationFolder);

  newProject.npmInstall(destinationFolder, newProject.congratulations);
}

function unknownCommand() {
  console.log('unknown command');
}

commander.version(require('../package.json').version);

commander.command('new <my-react-component>')
         .description('- generates a <my-react-component> folder with standard node and react tools : r2c2 new my-react-component')
         .action(newCommand);

commander.command('*')
         .description('- unknown command')
         .action(unknownCommand);

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
