"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getToggleButtonGroupUtilityClass = getToggleButtonGroupUtilityClass;

var _base = require("@mui/base");

function getToggleButtonGroupUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiToggleButtonGroup', slot);
}

const toggleButtonGroupClasses = (0, _base.generateUtilityClasses)('MuiToggleButtonGroup', ['root', 'selected', 'vertical', 'disabled', 'grouped', 'groupedHorizontal', 'groupedVertical']);
var _default = toggleButtonGroupClasses;
exports.default = _default;