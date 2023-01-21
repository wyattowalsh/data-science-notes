'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = forEach;

var _isIterable = require('./isIterable');

var _isIterable2 = _interopRequireDefault(_isIterable);

var _isIterator = require('./isIterator');

var _isIterator2 = _interopRequireDefault(_isIterator);

/**
 * Helper to iterate over sequence types (arrays, array-like objects,
 * objects, etc)
 *
 * @param {Iterable} seq
 * @param {function(this:T, ...)} callback
 * @param {T=} optThisObj
 * @template T
 */

function forEach(seq, callback, optThisObj) {
  if (Array.isArray(seq)) {
    var _i = 0;
    var l = seq.length;
    if (optThisObj) {
      for (; _i < l; _i++) {
        callback.call(optThisObj, seq[_i], _i);
      }
    } else {
      for (; _i < l; _i++) {
        callback(seq[_i], _i);
      }
    }
    return;
  }
  if ((0, _isIterable2['default'])(seq)) {
    seq = _getIterator(seq);
  }
  if ((0, _isIterator2['default'])(seq)) {
    var v;
    var i;
    // Avoiding call if it is not necessary is faster in some browsers
    if (optThisObj !== undefined) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(seq), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          v = _step.value;

          i += 1;
          callback.call(optThisObj, v, i);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _getIterator(seq), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          v = _step2.value;

          i += 1;
          callback(v, i);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } else if (seq && typeof seq === 'object') {
    if (optThisObj) {
      for (var prop in seq) {
        callback.call(optThisObj, seq[prop], prop);
      }
    } else {
      for (var prop in seq) {
        callback(seq[prop], prop);
      }
    }
  }
}

module.exports = exports['default'];