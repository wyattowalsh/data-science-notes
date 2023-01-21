"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getLinkUtilityClass = getLinkUtilityClass;

var _base = require("@mui/base");

function getLinkUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiLink', slot);
}

const linkClasses = (0, _base.generateUtilityClasses)('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
var _default = linkClasses;
exports.default = _default;