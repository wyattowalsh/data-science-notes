"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCheckboxUtilityClass = getCheckboxUtilityClass;

var _base = require("@mui/base");

function getCheckboxUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCheckbox', slot);
}

const checkboxClasses = (0, _base.generateUtilityClasses)('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
var _default = checkboxClasses;
exports.default = _default;