'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _WorkerSettings = require('./WorkerSettings');

var _WorkerSettings2 = _interopRequireDefault(_WorkerSettings);

var _initializeBrowserWorker = require('./initializeBrowserWorker');

var _initializeBrowserWorker2 = _interopRequireDefault(_initializeBrowserWorker);

var _ = require('./');

var jsnx = _interopRequireWildcard(_);

Object.defineProperty(jsnx, 'workerPath', {
  set: function set(value) {
    _WorkerSettings2['default'].workerPath = value;
  },
  get: function get() {
    return _WorkerSettings2['default'].workerPath;
  }
});

_WorkerSettings2['default'].methodLookupFunction = function (name) {
  return jsnx[name];
};
(0, _initializeBrowserWorker2['default'])();

exports['default'] = jsnx;
module.exports = exports['default'];