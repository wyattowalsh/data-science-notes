"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListItemSecondaryActionClassesUtilityClass = getListItemSecondaryActionClassesUtilityClass;

var _base = require("@mui/base");

function getListItemSecondaryActionClassesUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiListItemSecondaryAction', slot);
}

const listItemSecondaryActionClasses = (0, _base.generateUtilityClasses)('MuiListItemSecondaryAction', ['root', 'disableGutters']);
var _default = listItemSecondaryActionClasses;
exports.default = _default;