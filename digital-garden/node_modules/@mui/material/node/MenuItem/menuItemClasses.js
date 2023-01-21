"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMenuItemUtilityClass = getMenuItemUtilityClass;

var _base = require("@mui/base");

function getMenuItemUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiMenuItem', slot);
}

const menuItemClasses = (0, _base.generateUtilityClasses)('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
var _default = menuItemClasses;
exports.default = _default;