"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getInputLabelUtilityClasses = getInputLabelUtilityClasses;

var _base = require("@mui/base");

function getInputLabelUtilityClasses(slot) {
  return (0, _base.generateUtilityClass)('MuiInputLabel', slot);
}

const inputLabelClasses = (0, _base.generateUtilityClasses)('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);
var _default = inputLabelClasses;
exports.default = _default;