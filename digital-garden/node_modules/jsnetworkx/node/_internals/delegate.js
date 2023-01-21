/*eslint camelcase:0*/
'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = delegate;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _message = require('./message');

var _delegateSync = require('./delegateSync');

var _delegateSync2 = _interopRequireDefault(_delegateSync);

function delegateToChildProcess(method, args) {
  return new _Promise(function (resolve, reject) {
    var response = '';
    var error = '';
    var child = _child_process2['default'].spawn(process.execPath, [_path2['default'].join(__dirname, '../worker.js')]);
    child.stdout.on('data', function (data) {
      return response += data;
    });
    child.stderr.on('data', function (data) {
      return error += data;
    });
    child.on('close', function () {
      if (error) {
        reject(new Error(error));
      } else {
        resolve(JSON.parse(response));
      }
    });

    child.stdin.write(JSON.stringify({ method: method, args: args }));
    child.stdin.end();
  });
}

/**
 * DON'T CALL THIS FUNCTION EXPLICITLY. It's inserted by a transform.
 *
 * Eventually this will spawn another thread and run the computation there.
 *
 * @param {string} method The name on the root jsnx object to execute.
 * @param {Array} args An array of arguments to send to the worker.
 *    Some types, such as graphs, are converted to a different format first.
 * @return {Promise}
 */

function delegate(method, args) {
  var _serializeAll = (0, _message.serializeAll)(args);

  var serializable = _serializeAll.serializable;
  var serializedValues = _serializeAll.serializedValues;

  if (!serializable) {
    console.info('At least one argument can\'t be serialized and sent to the worker. ' + ('We will run ' + method + ' in the same thread instead.'));
    return (0, _delegateSync2['default'])(method, args);
  }
  return delegateToChildProcess(method, serializedValues).then(function (response) {
    return (0, _message.deserialize)(response.result);
  });
}

module.exports = exports['default'];