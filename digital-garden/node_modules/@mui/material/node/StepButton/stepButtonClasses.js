"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStepButtonUtilityClass = getStepButtonUtilityClass;

var _base = require("@mui/base");

function getStepButtonUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiStepButton', slot);
}

const stepButtonClasses = (0, _base.generateUtilityClasses)('MuiStepButton', ['root', 'horizontal', 'vertical', 'touchRipple']);
var _default = stepButtonClasses;
exports.default = _default;