window.React = require('react/addons');
window.ReactRouter = require('react-router');

window.MyReactComponent = require('../../src');
window.MyReactComponent.packageJson = require('../../package.json');
window.MyReactComponent.config.url = 'http://localhost:9090';

// Bootstraping your single page app
const { createHistory, useBasename } = require('history');
const history = useBasename(createHistory)({
  basename: document.baseURI.substring(window.location.origin.length, document.baseURI.length - 1),
});
React.render(
  React.createElement(ReactRouter.Router, {
    history: history,
    routes: require('./spa').routes,
  }),
  document.getElementById('spa')
);
