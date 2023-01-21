'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = delegateToWorker;

var _Worker = require('./Worker');

var _Worker2 = _interopRequireDefault(_Worker);

var _WorkerSettings = require('../WorkerSettings');

var _WorkerSettings2 = _interopRequireDefault(_WorkerSettings);

var _delegateSync = require('./delegateSync');

var _delegateSync2 = _interopRequireDefault(_delegateSync);

var _message = require('./message');

var delegateImplementation;
if (typeof _Worker2['default'] === 'function') {
  // Workers are supported
  delegateImplementation = function (method, args) {
    var _serializeAll = (0, _message.serializeAll)(args);

    var serializable = _serializeAll.serializable;
    var serializedValues = _serializeAll.serializedValues;

    if (!serializable) {
      console.info('At least one argument can\'t be serialized and sent to the worker. ' + ('We will run ' + method + ' in the same thread instead.'));
      return (0, _delegateSync2['default'])(method, args);
    }

    return new _Promise(function (resolve, reject) {
      var worker = new _Worker2['default'](_WorkerSettings2['default'].workerPath);
      worker.addEventListener('message', function (oEvent) {
        return resolve((0, _message.deserialize)(oEvent.data));
      }, false);
      worker.addEventListener('error', reject, false);
      worker.postMessage({ method: method, args: serializedValues });
    });
  };
} else {
  delegateImplementation = function (method, args) {
    console.info('Workers are not supported in this environment, so "' + method + '" will ' + 'run in the same thread instead. This might block the environment.');
    return (0, _delegateSync2['default'])(method, args);
  };
}

/**
 * DON'T CALL THIS FUNCTION EXPLICITLY. It's inserted by a transform.
 *
 * Tries to create a worker and pass the arguments to it. Copying large graphs
 * is not very fast, but still faster than running most algorithms
 * synchronously.
 *
 * Falls back to synchronous execution if browser doesn't support workers.
 *
 * This returns a promise which gets resolved with the result sent from the
 * worker or the synchronous functions.
 *
 * @param {string} method The name on the root jsnx object to execute.
 * @param {Array} args An array of arguments to send to the worker.
 *    Some types, such as graphs, are converted to a different format first.
 * @return {Promise}
 */

function delegateToWorker(method, args) {
  return delegateImplementation(method, args);
}

module.exports = exports['default'];