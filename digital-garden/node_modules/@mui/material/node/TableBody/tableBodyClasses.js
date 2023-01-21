"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableBodyUtilityClass = getTableBodyUtilityClass;

var _base = require("@mui/base");

function getTableBodyUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTableBody', slot);
}

const tableBodyClasses = (0, _base.generateUtilityClasses)('MuiTableBody', ['root']);
var _default = tableBodyClasses;
exports.default = _default;