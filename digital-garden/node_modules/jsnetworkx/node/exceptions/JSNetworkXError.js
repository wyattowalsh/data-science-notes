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

var JSNetworkXError = (function (_JSNetworkXException) {
  _inherits(JSNetworkXError, _JSNetworkXException);

  function JSNetworkXError(message) {
    _classCallCheck(this, JSNetworkXError);

    _get(Object.getPrototypeOf(JSNetworkXError.prototype), 'constructor', this).call(this, message);
    this.name = 'JSNetworkXError';
  }

  return JSNetworkXError;
})(_JSNetworkXException3['default']);

exports['default'] = JSNetworkXError;
module.exports = exports['default'];