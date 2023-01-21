"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListSubheaderUtilityClass = getListSubheaderUtilityClass;

var _base = require("@mui/base");

function getListSubheaderUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiListSubheader', slot);
}

const listSubheaderClasses = (0, _base.generateUtilityClasses)('MuiListSubheader', ['root', 'colorPrimary', 'colorInherit', 'gutters', 'inset', 'sticky']);
var _default = listSubheaderClasses;
exports.default = _default;