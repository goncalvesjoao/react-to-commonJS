import './jsdom';

import React from 'react';
import sinon from 'sinon';
import mockery from 'mockery';
import testTree from 'react-test-tree'
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai'
import MyReactComponent from '../../src';

function renderStateless(Component, props) {
  const wrapper = TestUtils.renderIntoDocument(<div><Component { ...props } /></div>);

  return findDOMNode(wrapper).children[0];
}

global.React = React;
global.sinon = sinon;
global.expect = expect;
global.mockery = mockery;
global.testTree = testTree;
global.TestUtils = TestUtils;
global.renderStateless = renderStateless;
global.MyReactComponent = MyReactComponent;
