"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListItemUtilityClass = getListItemUtilityClass;

var _base = require("@mui/base");

function getListItemUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiListItem', slot);
}

const listItemClasses = (0, _base.generateUtilityClasses)('MuiListItem', ['root', 'container', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'padding', 'button', 'secondaryAction', 'selected']);
var _default = listItemClasses;
exports.default = _default;