"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCardActionsUtilityClass = getCardActionsUtilityClass;

var _base = require("@mui/base");

function getCardActionsUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCardActions', slot);
}

const cardActionsClasses = (0, _base.generateUtilityClasses)('MuiCardActions', ['root', 'spacing']);
var _default = cardActionsClasses;
exports.default = _default;