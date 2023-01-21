"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getToolbarUtilityClass = getToolbarUtilityClass;

var _base = require("@mui/base");

function getToolbarUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiToolbar', slot);
}

const toolbarClasses = (0, _base.generateUtilityClasses)('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
var _default = toolbarClasses;
exports.default = _default;