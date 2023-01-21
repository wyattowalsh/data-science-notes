"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableSortLabelUtilityClass = getTableSortLabelUtilityClass;

var _base = require("@mui/base");

function getTableSortLabelUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTableSortLabel', slot);
}

const tableSortLabelClasses = (0, _base.generateUtilityClasses)('MuiTableSortLabel', ['root', 'active', 'icon', 'iconDirectionDesc', 'iconDirectionAsc']);
var _default = tableSortLabelClasses;
exports.default = _default;