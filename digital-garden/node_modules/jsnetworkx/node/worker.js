/**
 * @fileoverview
 * A "worker" node script for asynchronous methods. It accepts the method to
 * call and the arguments to pass from stdin and writes the result to stdout.
 *
 * Possible exit codes:
 *  - 0: Everything OK
 *  - 1: Computation produced an error
 *  - 2: Unable to deserialize input or serialize result
 */
'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _internalsMessage = require('./_internals/message');

var _ = require('./');

var jsnx = _interopRequireWildcard(_);

var input = '';
process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('data', function (chunk) {
  return input += chunk;
});
process.stdin.on('end', function () {
  var method;
  var args;
  var result;
  try {
    var _JSON$parse = JSON.parse(input);

    method = _JSON$parse.method;
    args = _JSON$parse.args;

    args = args.map(_internalsMessage.deserialize);
  } catch (error) {
    exitWithError(2, error.message);
    return;
  }
  try {
    result = jsnx[method].apply(null, args);
  } catch (error) {
    exitWithError(1, error.message);
    return;
  }
  try {
    result = JSON.stringify({ result: (0, _internalsMessage.serialize)(result) });
    process.stdout.write(result);
    process.exit(0);
  } catch (error) {
    exitWithError(2, error.message);
  }
});

function exitWithError(code, message) {
  process.stderr.write(message);
  process.exit(code);
}