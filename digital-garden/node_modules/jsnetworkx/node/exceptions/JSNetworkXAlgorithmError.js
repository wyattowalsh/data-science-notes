'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _JSNetworkXException2 = require('./JSNetworkXException');

var _JSNetworkXException3 = _interopRequireDefault(_JSNetworkXException2);

/**
 * Exception for unexpected termination of algorithms.
 * @constructor
 * @extends {JSNetworkXException}
 */

var JSNetworkXAlgorithmError = (function (_JSNetworkXException) {
  _inherits(JSNetworkXAlgorithmError, _JSNetworkXException);

  function JSNetworkXAlgorithmError(message) {
    _classCallCheck(this, JSNetworkXAlgorithmError);

    _get(Object.getPrototypeOf(JSNetworkXAlgorithmError.prototype), 'constructor', this).call(this, message);
    this.name = 'JSNetworkXAlgorithmError';
  }

  return JSNetworkXAlgorithmError;
})(_JSNetworkXException3['default']);

exports['default'] = JSNetworkXAlgorithmError;
module.exports = exports['default'];