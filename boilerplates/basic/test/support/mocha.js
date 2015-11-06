import './jsdom';

import $ from 'teaspoon';
import chai from 'chai';
import React from 'react';
import sinon from 'sinon';
import mockery from 'mockery';
import sinonChai from 'sinon-chai';
import TestUtils from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

chai.use(sinonChai);

function renderStateless(Component, props) {
  const wrapper = TestUtils.renderIntoDocument(<div><Component { ...props } /></div>);

  return findDOMNode(wrapper).children[0];
}

global.$ = $;
global.React = React;
global.sinon = sinon;
global.expect = chai.expect;
global.mockery = mockery;
global.TestUtils = TestUtils;
global.renderStateless = renderStateless;
