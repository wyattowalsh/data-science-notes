"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getYearPickerUtilityClass = getYearPickerUtilityClass;

var _base = require("@mui/base");

function getYearPickerUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiYearPicker', slot);
}

const yearPickerClasses = (0, _base.generateUtilityClasses)('MuiYearPicker', ['root']);
var _default = yearPickerClasses;
exports.default = _default;