"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStepLabelUtilityClass = getStepLabelUtilityClass;

var _base = require("@mui/base");

function getStepLabelUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiStepLabel', slot);
}

const stepLabelClasses = (0, _base.generateUtilityClasses)('MuiStepLabel', ['root', 'horizontal', 'vertical', 'label', 'active', 'completed', 'error', 'disabled', 'iconContainer', 'alternativeLabel', 'labelContainer']);
var _default = stepLabelClasses;
exports.default = _default;