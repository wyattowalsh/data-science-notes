'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = initializeBrowserWorker;

var _internalsMessage = require('./_internals/message');

var _WorkerSettings = require('./WorkerSettings');

var _WorkerSettings2 = _interopRequireDefault(_WorkerSettings);

/**
 * If this function is executed inside a Worker, it will listen to the
 * "message" event and use `WorkerSettings.methodLookupFunction` to get a
 * reference to the JSNetworkX method to executed.
 */

function initializeBrowserWorker() {
  if (!global.document) {
    // inside worker
    global.onmessage = function (event) {
      var args = event.data.args.map(_internalsMessage.deserialize);
      var result = _WorkerSettings2['default'].methodLookupFunction(event.data.method).apply(null, args);
      global.postMessage((0, _internalsMessage.serialize)(result));
      global.close();
    };
  }
}

module.exports = exports['default'];