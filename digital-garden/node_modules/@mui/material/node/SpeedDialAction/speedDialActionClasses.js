"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSpeedDialActionUtilityClass = getSpeedDialActionUtilityClass;

var _base = require("@mui/base");

function getSpeedDialActionUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiSpeedDialAction', slot);
}

const speedDialActionClasses = (0, _base.generateUtilityClasses)('MuiSpeedDialAction', ['fab', 'fabClosed', 'staticTooltip', 'staticTooltipClosed', 'staticTooltipLabel', 'tooltipPlacementLeft', 'tooltipPlacementRight']);
var _default = speedDialActionClasses;
exports.default = _default;