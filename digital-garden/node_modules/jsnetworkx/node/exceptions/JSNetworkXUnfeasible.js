'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _JSNetworkXAlgorithmError2 = require('./JSNetworkXAlgorithmError');

var _JSNetworkXAlgorithmError3 = _interopRequireDefault(_JSNetworkXAlgorithmError2);

/**
 * Exception raised by algorithms trying to solve a problem
 * instance that has no feasible solution.
 * @constructor
 * @extends {JSNetworkXAlgorithmError}
 */

var JSNetworkXUnfeasible = (function (_JSNetworkXAlgorithmError) {
  _inherits(JSNetworkXUnfeasible, _JSNetworkXAlgorithmError);

  function JSNetworkXUnfeasible(message) {
    _classCallCheck(this, JSNetworkXUnfeasible);

    _get(Object.getPrototypeOf(JSNetworkXUnfeasible.prototype), 'constructor', this).call(this, message);
    this.name = 'JSNetworkXUnfeasible';
  }

  return JSNetworkXUnfeasible;
})(_JSNetworkXAlgorithmError3['default']);

exports['default'] = JSNetworkXUnfeasible;
module.exports = exports['default'];