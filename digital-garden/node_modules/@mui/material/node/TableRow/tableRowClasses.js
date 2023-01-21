"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableRowUtilityClass = getTableRowUtilityClass;

var _base = require("@mui/base");

function getTableRowUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTableRow', slot);
}

const tableRowClasses = (0, _base.generateUtilityClasses)('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
var _default = tableRowClasses;
exports.default = _default;