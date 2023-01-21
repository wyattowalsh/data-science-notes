'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = max;

var _forEach = require('./forEach');

var _forEach2 = _interopRequireDefault(_forEach);

/**
 * Returns the maximum value from an iterable. It uses the optional callback
 * function to determine the value to compare.
 *
 * @param {Iterable} iterable
 * @param {function(?): ?} map
 * @return {?}
 */

function max(iterable, map) {
  var maxComparisonValue = -Infinity;
  var maxValue;

  (0, _forEach2['default'])(iterable, function (value) {
    var comparisonValue = map ? map(value) : value;
    if (comparisonValue > maxComparisonValue) {
      maxComparisonValue = comparisonValue;
      maxValue = value;
    }
  });

  return maxValue;
}

module.exports = exports['default'];