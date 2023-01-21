"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSpeedDialIconUtilityClass = getSpeedDialIconUtilityClass;

var _base = require("@mui/base");

function getSpeedDialIconUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiSpeedDialIcon', slot);
}

const speedDialIconClasses = (0, _base.generateUtilityClasses)('MuiSpeedDialIcon', ['root', 'icon', 'iconOpen', 'iconWithOpenIconOpen', 'openIcon', 'openIconOpen']);
var _default = speedDialIconClasses;
exports.default = _default;