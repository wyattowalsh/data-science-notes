"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAccordionDetailsUtilityClass = getAccordionDetailsUtilityClass;

var _base = require("@mui/base");

function getAccordionDetailsUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAccordionDetails', slot);
}

const accordionDetailsClasses = (0, _base.generateUtilityClasses)('MuiAccordionDetails', ['root']);
var _default = accordionDetailsClasses;
exports.default = _default;