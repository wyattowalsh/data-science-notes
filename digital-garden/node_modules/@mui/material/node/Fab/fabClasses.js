"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getFabUtilityClass = getFabUtilityClass;

var _base = require("@mui/base");

function getFabUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiFab', slot);
}

const fabClasses = (0, _base.generateUtilityClasses)('MuiFab', ['root', 'primary', 'secondary', 'extended', 'circular', 'focusVisible', 'disabled', 'colorInherit', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'info', 'error', 'warning', 'success']);
var _default = fabClasses;
exports.default = _default;