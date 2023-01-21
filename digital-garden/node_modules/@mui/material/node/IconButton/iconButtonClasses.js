"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getIconButtonUtilityClass = getIconButtonUtilityClass;

var _base = require("@mui/base");

function getIconButtonUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiIconButton', slot);
}

const iconButtonClasses = (0, _base.generateUtilityClasses)('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
var _default = iconButtonClasses;
exports.default = _default;