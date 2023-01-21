"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStepContentUtilityClass = getStepContentUtilityClass;

var _base = require("@mui/base");

function getStepContentUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiStepContent', slot);
}

const stepContentClasses = (0, _base.generateUtilityClasses)('MuiStepContent', ['root', 'last', 'transition']);
var _default = stepContentClasses;
exports.default = _default;