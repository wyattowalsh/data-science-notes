"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSnackbarContentUtilityClass = getSnackbarContentUtilityClass;

var _base = require("@mui/base");

function getSnackbarContentUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiSnackbarContent', slot);
}

const snackbarContentClasses = (0, _base.generateUtilityClasses)('MuiSnackbarContent', ['root', 'message', 'action']);
var _default = snackbarContentClasses;
exports.default = _default;