'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _JSNetworkXUnfeasible2 = require('./JSNetworkXUnfeasible');

var _JSNetworkXUnfeasible3 = _interopRequireDefault(_JSNetworkXUnfeasible2);

/**
 * Exception for algorithms that should return a path when running
 * on graphs where such a path does not exist.
 */

var JSNetworkXNoPath = (function (_JSNetworkXUnfeasible) {
  _inherits(JSNetworkXNoPath, _JSNetworkXUnfeasible);

  function JSNetworkXNoPath(message) {
    _classCallCheck(this, JSNetworkXNoPath);

    _get(Object.getPrototypeOf(JSNetworkXNoPath.prototype), 'constructor', this).call(this, message);
    this.name = 'JSNetworkXNoPath';
  }

  return JSNetworkXNoPath;
})(_JSNetworkXUnfeasible3['default']);

exports['default'] = JSNetworkXNoPath;
module.exports = exports['default'];