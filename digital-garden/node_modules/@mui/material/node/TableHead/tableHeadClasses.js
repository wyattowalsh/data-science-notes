"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableHeadUtilityClass = getTableHeadUtilityClass;

var _base = require("@mui/base");

function getTableHeadUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTableHead', slot);
}

const tableHeadClasses = (0, _base.generateUtilityClasses)('MuiTableHead', ['root']);
var _default = tableHeadClasses;
exports.default = _default;