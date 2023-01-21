"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getPaginationItemUtilityClass = getPaginationItemUtilityClass;

var _base = require("@mui/base");

function getPaginationItemUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiPaginationItem', slot);
}

const paginationItemClasses = (0, _base.generateUtilityClasses)('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon']);
var _default = paginationItemClasses;
exports.default = _default;