'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = toIterator;

var _isArrayLike = require('./isArrayLike');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isIterator = require('./isIterator');

var _isIterator2 = _interopRequireDefault(_isIterator);

var _isIterable = require('./isIterable');

var _isIterable2 = _interopRequireDefault(_isIterable);

/**
 * Returns an iterator object for the given array, array-like object
 * or object. Should behave like Python's iter:
 * http://docs.python.org/library/functions.html#iter
 *
 *
 * The iterator object implements the goog.iter.Iterator interface.
 *
 * @param {Iterable} seq
 * @return {!Iterator}
 */

function toIterator(seq) {
  /*jshint expr:true*/
  if ((0, _isIterator2['default'])(seq)) {
    return seq;
  } else if ((0, _isIterable2['default'])(seq)) {
    return _getIterator(seq);
  } else if (Array.isArray(seq) || (0, _isArrayLike2['default'])(seq)) {
    return _regeneratorRuntime.mark(function callee$1$0(seq) {
      var i, l;
      return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            i = 0, l = seq.length;

          case 1:
            if (!(i < l)) {
              context$2$0.next = 7;
              break;
            }

            context$2$0.next = 4;
            return seq[i];

          case 4:
            i++;
            context$2$0.next = 1;
            break;

          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, callee$1$0, this);
    })(seq);
  } else {
    throw new TypeError('Unable to convert ' + seq + ' to an iterator');
  }
}

module.exports = exports['default'];
// eslint-disable-line no-shadow