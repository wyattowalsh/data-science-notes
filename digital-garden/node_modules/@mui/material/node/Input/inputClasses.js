"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getInputUtilityClass = getInputUtilityClass;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _base = require("@mui/base");

var _InputBase = require("../InputBase");

function getInputUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiInput', slot);
}

const inputClasses = (0, _extends2.default)({}, _InputBase.inputBaseClasses, (0, _base.generateUtilityClasses)('MuiInput', ['root', 'underline', 'input']));
var _default = inputClasses;
exports.default = _default;