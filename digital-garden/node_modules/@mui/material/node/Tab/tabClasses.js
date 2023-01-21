"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTabUtilityClass = getTabUtilityClass;

var _base = require("@mui/base");

function getTabUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTab', slot);
}

const tabClasses = (0, _base.generateUtilityClasses)('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper']);
var _default = tabClasses;
exports.default = _default;