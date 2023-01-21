"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCircularProgressUtilityClass = getCircularProgressUtilityClass;

var _base = require("@mui/base");

function getCircularProgressUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCircularProgress', slot);
}

const circularProgressClasses = (0, _base.generateUtilityClasses)('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);
var _default = circularProgressClasses;
exports.default = _default;