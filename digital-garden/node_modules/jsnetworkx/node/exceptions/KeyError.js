'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var KeyError = (function (_Error) {
  _inherits(KeyError, _Error);

  function KeyError(message) {
    _classCallCheck(this, KeyError);

    _get(Object.getPrototypeOf(KeyError.prototype), 'constructor', this).call(this);
    this.name = 'KeyError';
    this.message = message;
  }

  return KeyError;
})(Error);

exports['default'] = KeyError;
module.exports = exports['default'];