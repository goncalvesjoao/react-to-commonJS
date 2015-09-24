# react-to-commonjs2 AKA r2c2
A tool to help you build your react component and distribute it as a commonJS module.

## Getting started:
```
$> npm install react-to-commonjs -g
```
This will install a binary called *r2c2*.

With it you can create an empty npm node package with the basic tools that most of the React contributors are using and start writing your React code right of the bat.
```
$> r2c2 new my-component
```
See **Usage** section for more information.

## Problems:
- New front-end developers get overwhelmed by all the new tools and concepts they need to put together to build a React Component and being able to export it has a npm node package, ready to be used by the browser (commonJS);
- Not so new front-end developers don't want to deal with the pain of gathering all the necessary tools to build a React CommonJS project, everytime they create a new npm node package;
- Most of the times when building a React Component you need a web page to preview and perfect your work;
- and some of the times you also need to mock API server responses to preview and perfect your component behaviour.

## What this solution, offers:
- package.json with common "scripts" and "devDependencies" for building, testing and coverage your react component;
- Simple Single Page Application (SPA) project built with React (independent from you React project) with live reload, sass, etc. so you can preview and interact with your component;
- One small React Component example and its correspondent Test spec for those that want to start learning and for the SPA to "show something".
- Mock Servers so you can mimic what would be an API responding to your React Component (if it needs one).

## Usage:

### 1. Creating a new project
```
$> npm install react-to-commonjs -g
$> r2c2 new my_component
```
- This creates the following files: ![boilerplate_structure](https://raw.github.com/goncalvesjoao/react-to-commonjs/master/readme/boilerplate_structure.png)

- Be sure to fill in the missing **package.json** fields like "repository" and "author".

- *src* directory is where normally your source code goes.

- *spa* directory is a separate project that you can delete at will if you have no need for a web app where you can test and or document your component. ![spa_preview1](https://raw.github.com/goncalvesjoao/react-to-commonjs/master/readme/spa_preview1.png) ![spa_preview2](https://raw.github.com/goncalvesjoao/react-to-commonjs/master/readme/spa_preview2.png)

- In case you delete the *spa* directory, remember to delete its **package.json#devDependencies** reference and the **package.json#scripts**, **start** and **spa** entries.

### 2. Developing
```
$> cd my_component
$> <open editor>
$> npm start
<open browser on http:localhost:9000>
```
- A **gulp** task will launch **browser-sync** that in turn will serve the **SPA** on **localhost:9000**. You can change the server port in *spa/config/spa.js* file and run **npm start** again.

- The contents of *spa/css*, *spa/js* and *spa/public/* directories will all be processed and converted to proper html, css and javascript that the browser can understand. These files will be then copied to *spa/tmp* directory (ignored by .gitignore).

- In case of a 404 request **browser-sync** is configured to always return the *spa/tmp/index.html*, something that's required by a SPA that handles its own routes.

- A **gulp** task will be watching the *spa/public* and *spa/css* files and automatically updates the browser, through **browser-sync**.

- **Webpack** will be watching both the *spa/js* and your *src* directory, transpiling the code to plain javascript and updating your browser automatically, through **react-hot-loader**.

- **Eslint** will be connected to **Webpack** to let you know when your changes do not meet the [Airbnb javascript  style guide](https://github.com/airbnb/javascript) (see **spa/config/webpack.js#preLoaders** section if you want to disable it).

- A **mock server** will be raise for each *spa/config/mock_servers/index.js* entry with the same port has the entry's port attribute. Each **mock server** file (listed on *spa/config/mock_servers/index.js*) will receive an **expressJS** instance and from that you get all the control you need to mock you API. (If you have no need for mock servers, you can just delete the *spa/config/mock_servers* directory).

- Each **expressJS** instance is already configured with **cors** to accept your **localhost:9000** requests and with **body-parser** to properly understand your requests submitted body. (If you need to make changes regarding these type of configurations checkout the *spa/config/gulpfile.js@launchMockServers* function)

### 3. Testing
```
$> npm test
```
- **babel-istanbul** will do the same as **babel** on **4. Building** section but will also check and report your code coverage while running you tests with **mocha**.

- Coverage reports will be exported to the *coverage* directory (ignored by .gitignore).

```
$> npm run quick-test
```
- **npm run quick-test** is a quicker version, that bypasses the eslint and coverage verification that **npm test** does.

### 4. Building
```
$> npm run build
```
- **babel** will run through your code and convert your **es6** and **jsx** code to plain Javascript, but will leave intact all the **require** mentions on your code so it can be properly imported by other **CommonJS** packages.

- Your **CommonJs** code will be exported to the *dist* directory.
That is the reason why your prebuild **package.json#main** section points to *dist/index.js* and not *src/index.js*.

### 5. Publishing
- Cool video with instructions: https://docs.npmjs.com/getting-started/publishing-npm-packages

### 6. Using/importing your React Component on another project
- TODO

## Notes:
This tool was built using:
- node 4.1.0
- npm 3.3.3

If you are having problems with your node version (node-gyp problems and such) and/or can't install npm version 3, here is what helped me:

- Remove node:
```
$> rm -rf /usr/local/lib/node_modules
$> brew uninstall node
```
Use this to help remove what is left of node https://github.com/brock/node-reinstall

- Install latest node from https://nodejs.org/en/

- Install npm 3:
```
$> echo prefix=~/.node >> ~/.npmrc
$> curl -L https://www.npmjs.com/install.sh | sh
```

I came to this recipe through these links:
- https://gist.github.com/DanHerbert/9520689
- http://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x
