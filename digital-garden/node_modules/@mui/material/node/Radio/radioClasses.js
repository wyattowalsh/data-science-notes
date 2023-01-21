"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getRadioUtilityClass = getRadioUtilityClass;

var _base = require("@mui/base");

function getRadioUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiRadio', slot);
}

const radioClasses = (0, _base.generateUtilityClasses)('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary']);
var _default = radioClasses;
exports.default = _default;