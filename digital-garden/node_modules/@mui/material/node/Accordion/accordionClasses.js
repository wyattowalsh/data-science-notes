"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAccordionUtilityClass = getAccordionUtilityClass;

var _base = require("@mui/base");

function getAccordionUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAccordion', slot);
}

const accordionClasses = (0, _base.generateUtilityClasses)('MuiAccordion', ['root', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);
var _default = accordionClasses;
exports.default = _default;