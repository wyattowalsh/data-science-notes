"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getFormLabelUtilityClasses = getFormLabelUtilityClasses;

var _base = require("@mui/base");

function getFormLabelUtilityClasses(slot) {
  return (0, _base.generateUtilityClass)('MuiFormLabel', slot);
}

const formLabelClasses = (0, _base.generateUtilityClasses)('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);
var _default = formLabelClasses;
exports.default = _default;