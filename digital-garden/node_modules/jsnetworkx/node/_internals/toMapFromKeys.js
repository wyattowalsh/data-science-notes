'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = toMapFromKeys;

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

var _forEach = require('./forEach');

var _forEach2 = _interopRequireDefault(_forEach);

/**
 * Same as 'toObjectFromKeys' but returns a Map instead of an object.
 *
 * @param {Iterable} keys Container of keys
 * @param {*} opt_value the value, default is null
 *
 * @return {!Map}
 */

function toMapFromKeys(keys, optValue) {
  if (optValue == null) {
    // && opt_value == undefined
    optValue = null;
  }
  var result = new _Map2['default']();
  (0, _forEach2['default'])(keys, function (key) {
    result.set(key, optValue);
  });
  return result;
}

module.exports = exports['default'];