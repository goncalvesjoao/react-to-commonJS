window.React = require('react/addons');
window.CSSModules = require('react-css-modules');
window.ReactRouter = require('react-router');
window.ReactBootstrap = require('react-bootstrap');

window.MyReactComponent = require('../../src');
window.MyReactComponent.packageJson = require('../../package.json');
window.MyReactComponent.config.starwarsMicroService.url = 'http://localhost:9090';

// Bootstraping your single page app
React.render(
  React.createElement(ReactRouter.Router, {
    history: require('react-router/lib/BrowserHistory').history,
    children: require('./spa').routes,
  }),
  document.getElementById('spa')
);
