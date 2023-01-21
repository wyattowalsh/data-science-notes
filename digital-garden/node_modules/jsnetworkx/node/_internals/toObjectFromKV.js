'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = toObjectFromKV;

var _forEach = require('./forEach');

var _forEach2 = _interopRequireDefault(_forEach);

/**
 * Returns an object, given a container of (key, value) tuples.
 *
 * @param {Iterable} kvs Container of key,value tuples
 *
 * @return {!Object}
 */

function toObjectFromKV(kvs) {
  var obj = {};
  (0, _forEach2['default'])(kvs, function (kv) {
    obj[kv[0]] = kv[1];
  });
  return obj;
}

module.exports = exports['default'];