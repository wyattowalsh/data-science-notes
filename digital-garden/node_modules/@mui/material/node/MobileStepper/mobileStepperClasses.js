"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMobileStepperUtilityClass = getMobileStepperUtilityClass;

var _base = require("@mui/base");

function getMobileStepperUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiMobileStepper', slot);
}

const mobileStepperClasses = (0, _base.generateUtilityClasses)('MuiMobileStepper', ['root', 'positionBottom', 'positionTop', 'positionStatic', 'dots', 'dot', 'dotActive', 'progress']);
var _default = mobileStepperClasses;
exports.default = _default;