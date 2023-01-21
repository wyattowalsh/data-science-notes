"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCollapseUtilityClass = getCollapseUtilityClass;

var _base = require("@mui/base");

function getCollapseUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiCollapse', slot);
}

const collapseClasses = (0, _base.generateUtilityClasses)('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
var _default = collapseClasses;
exports.default = _default;