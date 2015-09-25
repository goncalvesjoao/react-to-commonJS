global.React = require('react/addons');
global.sinon = require('sinon');
global.expect = require('chai').expect;
global.mockery = require('mockery');
global.TestTree = require('react-test-tree');
global.TestUtils = global.React.addons.TestUtils;

require('./jsdom');

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
  useCleanCache: true,
});

mockery.registerMock('react-css-modules', function fakeCSSModules(Component) {
  return Component;
});

global.MyReactComponent = require('../../src');
