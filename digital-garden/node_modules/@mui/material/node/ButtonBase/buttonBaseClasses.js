"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getButtonBaseUtilityClass = getButtonBaseUtilityClass;

var _base = require("@mui/base");

function getButtonBaseUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiButtonBase', slot);
}

const buttonBaseClasses = (0, _base.generateUtilityClasses)('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
var _default = buttonBaseClasses;
exports.default = _default;