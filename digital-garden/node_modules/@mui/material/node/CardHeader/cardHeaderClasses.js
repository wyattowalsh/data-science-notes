"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCardHeaderUtilityClass = getCardHeaderUtilityClass;

var _base = require("@mui/base");

function getCardHeaderUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCardHeader', slot);
}

const cardHeaderClasses = (0, _base.generateUtilityClasses)('MuiCardHeader', ['root', 'avatar', 'action', 'content', 'title', 'subheader']);
var _default = cardHeaderClasses;
exports.default = _default;