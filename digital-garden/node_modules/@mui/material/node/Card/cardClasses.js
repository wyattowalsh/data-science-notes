"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCardUtilityClass = getCardUtilityClass;

var _base = require("@mui/base");

function getCardUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCard', slot);
}

const cardClasses = (0, _base.generateUtilityClasses)('MuiCard', ['root']);
var _default = cardClasses;
exports.default = _default;