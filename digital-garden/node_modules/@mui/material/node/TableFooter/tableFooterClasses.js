"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableFooterUtilityClass = getTableFooterUtilityClass;

var _base = require("@mui/base");

function getTableFooterUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTableFooter', slot);
}

const tableFooterClasses = (0, _base.generateUtilityClasses)('MuiTableFooter', ['root']);
var _default = tableFooterClasses;
exports.default = _default;