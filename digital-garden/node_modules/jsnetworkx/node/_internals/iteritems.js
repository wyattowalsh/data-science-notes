'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = iteritems;

var _items = require('./items');

var _items2 = _interopRequireDefault(_items);

var _toIterator = require('./toIterator');

var _toIterator2 = _interopRequireDefault(_toIterator);

/**
 * Returns an iterator of [key, value] pairs for the given object (just like
 * Python's dict.iteritems()).
 *
 * @param {Object} obj
 * @return {!Array}
 */

function iteritems(obj) {
  return (0, _toIterator2['default'])((0, _items2['default'])(obj));
}

module.exports = exports['default'];