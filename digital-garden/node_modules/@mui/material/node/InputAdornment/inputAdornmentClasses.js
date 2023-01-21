"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getInputAdornmentUtilityClass = getInputAdornmentUtilityClass;

var _base = require("@mui/base");

function getInputAdornmentUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiInputAdornment', slot);
}

const inputAdornmentClasses = (0, _base.generateUtilityClasses)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
var _default = inputAdornmentClasses;
exports.default = _default;