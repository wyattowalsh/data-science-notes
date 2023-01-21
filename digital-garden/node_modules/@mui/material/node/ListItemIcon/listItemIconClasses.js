"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListItemIconUtilityClass = getListItemIconUtilityClass;

var _base = require("@mui/base");

function getListItemIconUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiListItemIcon', slot);
}

const listItemIconClasses = (0, _base.generateUtilityClasses)('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
var _default = listItemIconClasses;
exports.default = _default;