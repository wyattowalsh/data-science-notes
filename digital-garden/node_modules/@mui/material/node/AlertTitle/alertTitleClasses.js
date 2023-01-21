"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAlertTitleUtilityClass = getAlertTitleUtilityClass;

var _base = require("@mui/base");

function getAlertTitleUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAlertTitle', slot);
}

const alertTitleClasses = (0, _base.generateUtilityClasses)('MuiAlertTitle', ['root']);
var _default = alertTitleClasses;
exports.default = _default;