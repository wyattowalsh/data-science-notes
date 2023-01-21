"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSwitchUtilityClass = getSwitchUtilityClass;

var _base = require("@mui/base");

function getSwitchUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiSwitch', slot);
}

const switchClasses = (0, _base.generateUtilityClasses)('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
var _default = switchClasses;
exports.default = _default;