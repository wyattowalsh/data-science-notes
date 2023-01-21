"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getPaginationUtilityClass = getPaginationUtilityClass;

var _base = require("@mui/base");

function getPaginationUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiPagination', slot);
}

const paginationClasses = (0, _base.generateUtilityClasses)('MuiPagination', ['root', 'ul', 'outlined', 'text']);
var _default = paginationClasses;
exports.default = _default;