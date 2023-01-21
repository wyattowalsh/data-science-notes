"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListItemButtonUtilityClass = getListItemButtonUtilityClass;

var _base = require("@mui/base");

function getListItemButtonUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiListItemButton', slot);
}

const listItemButtonClasses = (0, _base.generateUtilityClasses)('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);
var _default = listItemButtonClasses;
exports.default = _default;