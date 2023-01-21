"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getInputBaseUtilityClass = getInputBaseUtilityClass;

var _base = require("@mui/base");

function getInputBaseUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiInputBase', slot);
}

const inputBaseClasses = (0, _base.generateUtilityClasses)('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
var _default = inputBaseClasses;
exports.default = _default;