"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDialogUtilityClass = getDialogUtilityClass;

var _base = require("@mui/base");

function getDialogUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiDialog', slot);
}

const dialogClasses = (0, _base.generateUtilityClasses)('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
var _default = dialogClasses;
exports.default = _default;