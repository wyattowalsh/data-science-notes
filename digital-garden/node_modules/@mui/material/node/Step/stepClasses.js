"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStepUtilityClass = getStepUtilityClass;

var _base = require("@mui/base");

function getStepUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiStep', slot);
}

const stepClasses = (0, _base.generateUtilityClasses)('MuiStep', ['root', 'horizontal', 'vertical', 'alternativeLabel', 'completed']);
var _default = stepClasses;
exports.default = _default;