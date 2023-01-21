"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDialogContentUtilityClass = getDialogContentUtilityClass;

var _base = require("@mui/base");

function getDialogContentUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiDialogContent', slot);
}

const dialogContentClasses = (0, _base.generateUtilityClasses)('MuiDialogContent', ['root', 'dividers']);
var _default = dialogContentClasses;
exports.default = _default;