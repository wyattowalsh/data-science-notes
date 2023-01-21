'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _Array$from = require('babel-runtime/core-js/array/from')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = delegateSync;

var _WorkerSettings = require('../WorkerSettings');

var _WorkerSettings2 = _interopRequireDefault(_WorkerSettings);

var _isIterator = require('./isIterator');

var _isIterator2 = _interopRequireDefault(_isIterator);

/**
 * DON'T CALL THIS FUNCTION EXPLICITLY. It's inserted by a transform.
 *
 * In environments that does not support workers, we are using this synchronous
 * version.
 *
 * @param {string} method The name on the root jsnx object to execute.
 * @param {Array} args An array of arguments to send to the worker.
 *    Some types, such as graphs, are converted to a different format first.
 * @return {Promise}
 */

function delegateSync(method, args) {
  return new _Promise(function (resolve, reject) {
    try {
      // We have to do the same here as we do in the worker, which is
      // returning an array if we get back an iterator
      var result = _WorkerSettings2['default'].methodLookupFunction(method).apply(null, args);
      if ((0, _isIterator2['default'])(result)) {
        result = _Array$from(result);
      }
      resolve(result);
    } catch (ex) {
      reject(ex);
    }
  });
}

module.exports = exports['default'];