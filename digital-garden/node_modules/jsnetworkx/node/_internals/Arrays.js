'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodashCollectionShuffle = require('lodash/collection/shuffle');

var _lodashCollectionShuffle2 = _interopRequireDefault(_lodashCollectionShuffle);

var _lodashCollectionSample = require('lodash/collection/sample');

var _lodashCollectionSample2 = _interopRequireDefault(_lodashCollectionSample);

exports['default'] = { shuffle: _lodashCollectionShuffle2['default'], sample: _lodashCollectionSample2['default'] };
module.exports = exports['default'];