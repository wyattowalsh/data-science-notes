"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDialogContentTextUtilityClass = getDialogContentTextUtilityClass;

var _base = require("@mui/base");

function getDialogContentTextUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiDialogContentText', slot);
}

const dialogContentTextClasses = (0, _base.generateUtilityClasses)('MuiDialogContentText', ['root']);
var _default = dialogContentTextClasses;
exports.default = _default;