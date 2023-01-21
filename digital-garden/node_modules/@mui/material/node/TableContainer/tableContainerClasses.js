"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableContainerUtilityClass = getTableContainerUtilityClass;

var _base = require("@mui/base");

function getTableContainerUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTableContainer', slot);
}

const tableContainerClasses = (0, _base.generateUtilityClasses)('MuiTableContainer', ['root']);
var _default = tableContainerClasses;
exports.default = _default;