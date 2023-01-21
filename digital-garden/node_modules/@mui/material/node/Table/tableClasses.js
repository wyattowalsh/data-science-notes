"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableUtilityClass = getTableUtilityClass;

var _base = require("@mui/base");

function getTableUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTable', slot);
}

const tableClasses = (0, _base.generateUtilityClasses)('MuiTable', ['root', 'stickyHeader']);
var _default = tableClasses;
exports.default = _default;