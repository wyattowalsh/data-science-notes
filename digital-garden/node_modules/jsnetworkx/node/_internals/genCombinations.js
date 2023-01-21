'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Array$from = require('babel-runtime/core-js/array/from')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = genCombinations;
var marked0$0 = [genCombinations].map(_regeneratorRuntime.mark);

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

function reversed(array) {
  return array.slice().reverse();
}

/**
 * Implements Python's itertools.combinations
 *
 * Return r length subsequences of elements from the input iterable.
 *
 * @param {Iterable} iterable
 * @param {number} r
 *
 * @return {Iterator}
 */

function genCombinations(iterable, r) {
  var pool, n, indicies, reversedIndicies, i, k, j;
  return _regeneratorRuntime.wrap(function genCombinations$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        pool = _Array$from(iterable);
        n = pool.length;

        if (!(r > n)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt('return');

      case 4:
        indicies = (0, _range2['default'])(r);
        reversedIndicies = reversed(indicies);
        context$1$0.next = 8;
        return indicies.map(function (i) {
          return pool[i];
        });

      case 8:
        if (!true) {
          context$1$0.next = 26;
          break;
        }

        i = undefined;
        k = 0;

      case 11:
        if (!(k < reversedIndicies.length)) {
          context$1$0.next = 18;
          break;
        }

        i = reversedIndicies[k];

        if (!(indicies[i] !== i + n - r)) {
          context$1$0.next = 15;
          break;
        }

        return context$1$0.abrupt('break', 18);

      case 15:
        k++;
        context$1$0.next = 11;
        break;

      case 18:
        if (!(reversedIndicies.length === k)) {
          context$1$0.next = 20;
          break;
        }

        return context$1$0.abrupt('return');

      case 20:
        indicies[i] += 1;
        for (j = i + 1; j < r; j++) {
          indicies[j] = indicies[j - 1] + 1;
        }
        context$1$0.next = 24;
        return indicies.map(function (i) {
          return pool[i];
        });

      case 24:
        context$1$0.next = 8;
        break;

      case 26:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

module.exports = exports['default'];

// genCombinations('ABCD', 2) --> AB AC AD BC BD CD
// genCombinations(range(4), 3) --> 012 013 023 123
// eslint-disable-line no-loop-func