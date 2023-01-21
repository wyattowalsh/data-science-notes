"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTreeItemUtilityClass = getTreeItemUtilityClass;

var _base = require("@mui/base");

function getTreeItemUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTreeItem', slot);
}

const treeItemClasses = (0, _base.generateUtilityClasses)('MuiTreeItem', ['root', 'group', 'content', 'expanded', 'selected', 'focused', 'disabled', 'iconContainer', 'label']);
var _default = treeItemClasses;
exports.default = _default;