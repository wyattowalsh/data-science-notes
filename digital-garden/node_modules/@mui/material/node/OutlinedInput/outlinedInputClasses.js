"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getOutlinedInputUtilityClass = getOutlinedInputUtilityClass;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _base = require("@mui/base");

var _InputBase = require("../InputBase");

function getOutlinedInputUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiOutlinedInput', slot);
}

const outlinedInputClasses = (0, _extends2.default)({}, _InputBase.inputBaseClasses, (0, _base.generateUtilityClasses)('MuiOutlinedInput', ['root', 'notchedOutline', 'input']));
var _default = outlinedInputClasses;
exports.default = _default;