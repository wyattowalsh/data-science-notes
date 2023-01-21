"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStepperUtilityClass = getStepperUtilityClass;

var _base = require("@mui/base");

function getStepperUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiStepper', slot);
}

const stepperClasses = (0, _base.generateUtilityClasses)('MuiStepper', ['root', 'horizontal', 'vertical', 'alternativeLabel']);
var _default = stepperClasses;
exports.default = _default;