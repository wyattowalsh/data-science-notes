"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTablePaginationUtilityClass = getTablePaginationUtilityClass;

var _base = require("@mui/base");

function getTablePaginationUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTablePagination', slot);
}

const tablePaginationClasses = (0, _base.generateUtilityClasses)('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
var _default = tablePaginationClasses;
exports.default = _default;