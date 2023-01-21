'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = zipSequence;

var _isArrayLike = require('./isArrayLike');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isIterator = require('./isIterator');

var _isIterator2 = _interopRequireDefault(_isIterator);

var _zipIterator = require('./zipIterator');

var _zipIterator2 = _interopRequireDefault(_zipIterator);

function zipArray() {
  for (var _len = arguments.length, varArgs = Array(_len), _key = 0; _key < _len; _key++) {
    varArgs[_key] = arguments[_key];
  }

  // Pre-allocation arrays speeds up assignment drastically, so we want to
  // optimize for that case
  var length = varArgs.length;
  var min = Infinity;
  var i;
  var result;
  var nextZip = new Array(length);

  // first pass
  for (i = 0; i < length; i++) {
    var array = varArgs[i];
    var arrayLength = array.length;
    if (arrayLength < min) {
      min = arrayLength;
      if (min === 0) {
        return []; // backout early
      }
    }
    nextZip[i] = array[0];
  }
  result = new Array(min);
  result[0] = nextZip;

  for (i = 1; i < min; i++) {
    nextZip = new Array(length);
    for (var j = 0; j < length; j++) {
      nextZip[j] = varArgs[j][i];
    }
    result[i] = nextZip;
  }
  return result;
}

/**
 * Helper to zip sequence types (arrays, array-like objects, objects, etc).
 * All arguments must be the same type. The first argument is used to determine
 * the type.
 * This behaves the same as Python's zip function, i.e. the result has the
 * length of the shortest input.
 *
 * Array -> Array
 * Array-like -> Array
 * Iterator -> Iterator
 *
 * @param {...(Iterable)} var_args
 *
 * @return {!(Array|Iterator)}
 */

function zipSequence() {
  for (var _len2 = arguments.length, varArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    varArgs[_key2] = arguments[_key2];
  }

  var first = varArgs[0];

  if ((0, _isArrayLike2['default'])(first)) {
    return zipArray.apply(null, varArgs);
  } else if ((0, _isIterator2['default'])(first)) {
    return _zipIterator2['default'].apply(null, varArgs);
  } else {
    throw new TypeError('Expected an iterator, array-like object or object, but got %s instead', first);
  }
}

module.exports = exports['default'];