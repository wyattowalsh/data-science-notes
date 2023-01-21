"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListItemTextUtilityClass = getListItemTextUtilityClass;

var _base = require("@mui/base");

function getListItemTextUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiListItemText', slot);
}

const listItemTextClasses = (0, _base.generateUtilityClasses)('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
var _default = listItemTextClasses;
exports.default = _default;