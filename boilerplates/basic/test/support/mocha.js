import './jsdom';

import React from 'react';
import sinon from 'sinon';
import mockery from 'mockery';
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils';
import MyReactComponent from '../../src';

global.React = React;
global.sinon = sinon;
global.expect = expect;
global.mockery = mockery;
global.TestUtils = TestUtils;
global.MyReactComponent = MyReactComponent;
