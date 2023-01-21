'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isMap;

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

/**
 * Tests whether the value is a Map.
 *
 * @param {*} v The value to test
 * @return {bool}
 */

function isMap(v) {
  return v instanceof _Map2['default'];
}

module.exports = exports['default'];