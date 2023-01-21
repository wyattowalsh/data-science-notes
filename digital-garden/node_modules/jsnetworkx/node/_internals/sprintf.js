'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _tinySprintf = require('tiny-sprintf');

var _tinySprintf2 = _interopRequireDefault(_tinySprintf);

var undef;

_tinySprintf2['default'].j = function (value) {
  if (value === undef) {
    return undef + '';
  }

  try {
    return JSON.stringify(value);
  } catch (e) {
    return value + '';
  }
};

exports['default'] = _tinySprintf2['default'];
module.exports = exports['default'];