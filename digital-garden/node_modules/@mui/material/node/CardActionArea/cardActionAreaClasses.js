"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCardActionAreaUtilityClass = getCardActionAreaUtilityClass;

var _base = require("@mui/base");

function getCardActionAreaUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCardActionArea', slot);
}

const cardActionAreaClasses = (0, _base.generateUtilityClasses)('MuiCardActionArea', ['root', 'focusVisible', 'focusHighlight']);
var _default = cardActionAreaClasses;
exports.default = _default;