#!/usr/bin/env node
'use strict';

const commander = require('commander');
const reactToCommonJS = require('../dist');

function newCommand(projectName, options) {
  const newProject = reactToCommonJS(
    projectName,
    process.cwd() + '/',
    {
      camelCase: /myReactComponent/g,
      snakeCase: /my_react_component/g,
      kebabCase: /my-react-component/g,
      pascalCase: /MyReactComponent/g,
      screamCase: /MY_REACT_COMPONENT/g,
    }
  );

  console.log('\n  - Creating your React project ...');
  newProject.cloneBoilerplates(options);
  console.log('  - Done\n');

  if (!options.noinstall) {
    console.log('  - Running "npm install" (this might take a while...)');
    newProject.npmInstall(newProject.congratulations);
  }
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
         .action(() => { console.log('unknown command'); });

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
