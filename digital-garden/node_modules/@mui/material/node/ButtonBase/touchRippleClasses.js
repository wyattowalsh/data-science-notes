"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTouchRippleUtilityClass = getTouchRippleUtilityClass;

var _base = require("@mui/base");

function getTouchRippleUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTouchRipple', slot);
}

const touchRippleClasses = (0, _base.generateUtilityClasses)('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
var _default = touchRippleClasses;
exports.default = _default;