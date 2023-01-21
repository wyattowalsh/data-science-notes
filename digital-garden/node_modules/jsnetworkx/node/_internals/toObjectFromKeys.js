'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = toObjectFromKeys;

var _forEach = require('./forEach');

var _forEach2 = _interopRequireDefault(_forEach);

/**
 * Returns an object, given an array of keys and an default value.
 * Like dict.fromkeys in Python.
 *
 * @param {Iterable} keys Container of keys
 * @param {*} optValue the value, default is null
 * @return {!Object}
 */

function toObjectFromKeys(keys) {
  var optValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  var result = {};
  (0, _forEach2['default'])(keys, function (key) {
    result[key] = optValue;
  });
  return result;
}

module.exports = exports['default'];