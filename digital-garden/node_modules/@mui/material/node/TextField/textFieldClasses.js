"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTextFieldUtilityClass = getTextFieldUtilityClass;

var _base = require("@mui/base");

function getTextFieldUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTextField', slot);
}

const textFieldClasses = (0, _base.generateUtilityClasses)('MuiTextField', ['root']);
var _default = textFieldClasses;
exports.default = _default;