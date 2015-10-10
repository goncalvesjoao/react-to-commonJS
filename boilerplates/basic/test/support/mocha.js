require('./jsdomBuilder')('<!doctype html><html><body></body></html>');

require('./dependencies');

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
  useCleanCache: true,
});

mockery.registerMock('react-css-modules', function fakeCSSModules(Component) {
  return Component;
});

global.MyReactComponent = require('../../src');
