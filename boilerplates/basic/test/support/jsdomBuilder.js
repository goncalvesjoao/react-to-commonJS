function jsdomBuilder(markup) {
  const jsdom = require('jsdom').jsdom;

  global.document = jsdom(markup || '');

  global.window = global.document.defaultView;

  global.navigator = {
    userAgent: 'node.js',
  };

  for (const key in global.window) {
    if (!global.window.hasOwnProperty(key)) { continue; }
    if (key in global) { continue; }

    global[key] = global.window[key];
  }

  return jsdom;
}

module.exports = jsdomBuilder;
