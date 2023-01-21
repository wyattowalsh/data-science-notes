"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSnackbarUtilityClass = getSnackbarUtilityClass;

var _base = require("@mui/base");

function getSnackbarUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiSnackbar', slot);
}

const snackbarClasses = (0, _base.generateUtilityClasses)('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);
var _default = snackbarClasses;
exports.default = _default;