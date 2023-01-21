"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getFormHelperTextUtilityClasses = getFormHelperTextUtilityClasses;

var _base = require("@mui/base");

function getFormHelperTextUtilityClasses(slot) {
  return (0, _base.generateUtilityClass)('MuiFormHelperText', slot);
}

const formHelperTextClasses = (0, _base.generateUtilityClasses)('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
var _default = formHelperTextClasses;
exports.default = _default;