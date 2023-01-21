'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = size;

var _isArrayLike = require('./isArrayLike');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isGraph = require('./isGraph');

var _isGraph2 = _interopRequireDefault(_isGraph);

var _lodashLangIsPlainObject = require('lodash/lang/isPlainObject');

var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

var _lodashCollectionSize = require('lodash/collection/size');

var _lodashCollectionSize2 = _interopRequireDefault(_lodashCollectionSize);

/**
 * Returns the number of elements in the container. That is
 * the number of elements in the array or object or the length
 * of a string.
 *
 * @param {(string|Object|ArrayLike|Graph)} obj
 *    Object to determine the length of
 *
 * @return {number} The number of elements
 * @throws {TypeError} When length cannot be determined
 */

function size(obj) {
  if ((0, _isGraph2['default'])(obj)) {
    return obj.numberOfNodes();
  } else if (typeof obj === 'string' || (0, _isArrayLike2['default'])(obj)) {
    return obj.length;
  } else if ((0, _lodashLangIsPlainObject2['default'])(obj)) {
    return (0, _lodashCollectionSize2['default'])(obj);
  } else {
    throw new TypeError('Expected a graph object, array, string or object, but got %s instead', typeof obj);
  }
}

module.exports = exports['default'];