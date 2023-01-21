"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListUtilityClass = getListUtilityClass;

var _base = require("@mui/base");

function getListUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiList', slot);
}

const listClasses = (0, _base.generateUtilityClasses)('MuiList', ['root', 'padding', 'dense', 'subheader']);
var _default = listClasses;
exports.default = _default;