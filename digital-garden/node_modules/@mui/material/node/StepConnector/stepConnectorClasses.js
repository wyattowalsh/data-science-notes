"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStepConnectorUtilityClass = getStepConnectorUtilityClass;

var _base = require("@mui/base");

function getStepConnectorUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiStepConnector', slot);
}

const stepConnectorClasses = (0, _base.generateUtilityClasses)('MuiStepConnector', ['root', 'horizontal', 'vertical', 'alternativeLabel', 'active', 'completed', 'disabled', 'line', 'lineHorizontal', 'lineVertical']);
var _default = stepConnectorClasses;
exports.default = _default;