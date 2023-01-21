"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getFormGroupUtilityClass = getFormGroupUtilityClass;

var _base = require("@mui/base");

function getFormGroupUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiFormGroup', slot);
}

const formGroupClasses = (0, _base.generateUtilityClasses)('MuiFormGroup', ['root', 'row', 'error']);
var _default = formGroupClasses;
exports.default = _default;