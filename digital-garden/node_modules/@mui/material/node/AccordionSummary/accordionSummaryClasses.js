"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAccordionSummaryUtilityClass = getAccordionSummaryUtilityClass;

var _base = require("@mui/base");

function getAccordionSummaryUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAccordionSummary', slot);
}

const accordionSummaryClasses = (0, _base.generateUtilityClasses)('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);
var _default = accordionSummaryClasses;
exports.default = _default;