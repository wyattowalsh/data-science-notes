"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getFormControlLabelUtilityClasses = getFormControlLabelUtilityClasses;

var _base = require("@mui/base");

function getFormControlLabelUtilityClasses(slot) {
  return (0, _base.generateUtilityClass)('MuiFormControlLabel', slot);
}

const formControlLabelClasses = (0, _base.generateUtilityClasses)('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error']);
var _default = formControlLabelClasses;
exports.default = _default;