"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getToggleButtonUtilityClass = getToggleButtonUtilityClass;

var _base = require("@mui/base");

function getToggleButtonUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiToggleButton', slot);
}

const toggleButtonClasses = (0, _base.generateUtilityClasses)('MuiToggleButton', ['root', 'disabled', 'selected', 'standard', 'primary', 'secondary', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
var _default = toggleButtonClasses;
exports.default = _default;