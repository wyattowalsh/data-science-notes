"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTreeViewUtilityClass = getTreeViewUtilityClass;

var _base = require("@mui/base");

function getTreeViewUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTreeView', slot);
}

const treeViewClasses = (0, _base.generateUtilityClasses)('MuiTreeView', ['root']);
var _default = treeViewClasses;
exports.default = _default;