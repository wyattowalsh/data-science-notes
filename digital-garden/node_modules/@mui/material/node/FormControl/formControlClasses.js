"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getFormControlUtilityClasses = getFormControlUtilityClasses;

var _base = require("@mui/base");

function getFormControlUtilityClasses(slot) {
  return (0, _base.generateUtilityClass)('MuiFormControl', slot);
}

const formControlClasses = (0, _base.generateUtilityClasses)('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);
var _default = formControlClasses;
exports.default = _default;