"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAccordionActionsUtilityClass = getAccordionActionsUtilityClass;

var _base = require("@mui/base");

function getAccordionActionsUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAccordionActions', slot);
}

const accordionActionsClasses = (0, _base.generateUtilityClasses)('MuiAccordionActions', ['root', 'spacing']);
var _default = accordionActionsClasses;
exports.default = _default;