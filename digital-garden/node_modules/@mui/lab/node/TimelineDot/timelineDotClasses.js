"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimelineDotUtilityClass = getTimelineDotUtilityClass;

var _base = require("@mui/base");

function getTimelineDotUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTimelineDot', slot);
}

const timelineDotClasses = (0, _base.generateUtilityClasses)('MuiTimelineDot', ['root', 'filled', 'outlined', 'filledGrey', 'outlinedGrey', 'filledPrimary', 'outlinedPrimary', 'filledSecondary', 'outlinedSecondary']);
var _default = timelineDotClasses;
exports.default = _default;