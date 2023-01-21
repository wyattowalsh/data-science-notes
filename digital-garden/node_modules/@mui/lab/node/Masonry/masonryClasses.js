"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMasonryUtilityClass = getMasonryUtilityClass;

var _base = require("@mui/base");

function getMasonryUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiMasonry', slot);
}

const masonryClasses = (0, _base.generateUtilityClasses)('MuiMasonry', ['root']);
var _default = masonryClasses;
exports.default = _default;