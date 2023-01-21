"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getPopoverUtilityClass = getPopoverUtilityClass;

var _base = require("@mui/base");

function getPopoverUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiPopover', slot);
}

const popoverClasses = (0, _base.generateUtilityClasses)('MuiPopover', ['root', 'paper']);
var _default = popoverClasses;
exports.default = _default;