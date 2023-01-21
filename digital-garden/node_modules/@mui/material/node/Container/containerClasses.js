"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getContainerUtilityClass = getContainerUtilityClass;

var _base = require("@mui/base");

function getContainerUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiContainer', slot);
}

const containerClasses = (0, _base.generateUtilityClasses)('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);
var _default = containerClasses;
exports.default = _default;