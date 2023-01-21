"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCardMediaUtilityClass = getCardMediaUtilityClass;

var _base = require("@mui/base");

function getCardMediaUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCardMedia', slot);
}

const cardMediaClasses = (0, _base.generateUtilityClasses)('MuiCardMedia', ['root', 'media', 'img']);
var _default = cardMediaClasses;
exports.default = _default;