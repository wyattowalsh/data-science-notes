"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getLinearProgressUtilityClass = getLinearProgressUtilityClass;

var _base = require("@mui/base");

function getLinearProgressUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiLinearProgress', slot);
}

const linearProgressClasses = (0, _base.generateUtilityClasses)('MuiLinearProgress', ['root', 'colorPrimary', 'colorSecondary', 'determinate', 'indeterminate', 'buffer', 'query', 'dashed', 'dashedColorPrimary', 'dashedColorSecondary', 'bar', 'barColorPrimary', 'barColorSecondary', 'bar1Indeterminate', 'bar1Determinate', 'bar1Buffer', 'bar2Indeterminate', 'bar2Buffer']);
var _default = linearProgressClasses;
exports.default = _default;