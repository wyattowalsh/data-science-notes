'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isSet;

var _Set = require('./Set');

var _Set2 = _interopRequireDefault(_Set);

/**
 * Tests whether the value is a Map.
 *
 * @param {*} v The value to test
 * @return {bool}
 */

function isSet(v) {
  return v instanceof _Set2['default'];
}

module.exports = exports['default'];