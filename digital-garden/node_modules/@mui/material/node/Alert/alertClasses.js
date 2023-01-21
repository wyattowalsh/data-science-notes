"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAlertUtilityClass = getAlertUtilityClass;

var _base = require("@mui/base");

function getAlertUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAlert', slot);
}

const alertClasses = (0, _base.generateUtilityClasses)('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);
var _default = alertClasses;
exports.default = _default;