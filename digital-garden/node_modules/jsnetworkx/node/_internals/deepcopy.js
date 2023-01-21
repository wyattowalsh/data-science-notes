/*jshint latedef:false*/
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = deepcopy;

var _lodashInternalBaseClone = require('lodash/internal/baseClone');

var _lodashInternalBaseClone2 = _interopRequireDefault(_lodashInternalBaseClone);

var _isGraph = require('./isGraph');

var _isGraph2 = _interopRequireDefault(_isGraph);

var _isMap = require('./isMap');

var _isMap2 = _interopRequireDefault(_isMap);

var _isSet = require('./isSet');

var _isSet2 = _interopRequireDefault(_isSet);

function deepcopyInstance(obj, stackA, stackB) {
  // temporary constructor, we don't know if the original expects
  // parameter
  /**
   * @constructor
   */
  var T_ = function T_() {};
  T_.prototype = obj.constructor.prototype;
  var ownProps = {};
  var prop;
  var instance;

  // collect instance properties
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      ownProps[prop] = obj[prop];
    }
  }

  // deepcopy them
  ownProps = deepcopyImplementation(ownProps, stackA, stackB);

  // create a new instance and assign properties
  instance = new T_();
  for (prop in ownProps) {
    instance[prop] = ownProps[prop];
  }

  return instance;
}

function deepcopyImplementation(value, stackA, stackB) {
  return (0, _lodashInternalBaseClone2['default'])(value, true, function (v) {
    if ((0, _isMap2['default'])(v) || (0, _isSet2['default'])(v) || (0, _isGraph2['default'])(v)) {
      var copy = deepcopyInstance(v, stackA, stackB);
      stackA.push(v);
      stackB.push(copy);
      return copy;
    }
  }, null, null, stackA, stackB);
}

/**
 * Creates a deep copy of the value, also of maps and sets.
 *
 * @param {*} value The value to be cloned
 * @return {?}
 */

function deepcopy(value) {
  return deepcopyImplementation(value, [], []);
}

module.exports = exports['default'];