"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getScopedCssBaselineUtilityClass = getScopedCssBaselineUtilityClass;

var _base = require("@mui/base");

function getScopedCssBaselineUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiScopedCssBaseline', slot);
}

const scopedCssBaselineClasses = (0, _base.generateUtilityClasses)('MuiScopedCssBaseline', ['root']);
var _default = scopedCssBaselineClasses;
exports.default = _default;