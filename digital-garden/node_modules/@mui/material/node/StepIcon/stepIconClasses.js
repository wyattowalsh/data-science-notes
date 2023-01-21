"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStepIconUtilityClass = getStepIconUtilityClass;

var _base = require("@mui/base");

function getStepIconUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiStepIcon', slot);
}

const stepIconClasses = (0, _base.generateUtilityClasses)('MuiStepIcon', ['root', 'active', 'completed', 'error', 'text']);
var _default = stepIconClasses;
exports.default = _default;