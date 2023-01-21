"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDividerUtilityClass = getDividerUtilityClass;

var _base = require("@mui/base");

function getDividerUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiDivider', slot);
}

const dividerClasses = (0, _base.generateUtilityClasses)('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
var _default = dividerClasses;
exports.default = _default;