"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCardContentUtilityClass = getCardContentUtilityClass;

var _base = require("@mui/base");

function getCardContentUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCardContent', slot);
}

const cardContentClasses = (0, _base.generateUtilityClasses)('MuiCardContent', ['root']);
var _default = cardContentClasses;
exports.default = _default;