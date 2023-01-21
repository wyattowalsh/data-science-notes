"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTooltipUtilityClass = getTooltipUtilityClass;

var _base = require("@mui/base");

function getTooltipUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTooltip', slot);
}

const tooltipClasses = (0, _base.generateUtilityClasses)('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);
var _default = tooltipClasses;
exports.default = _default;