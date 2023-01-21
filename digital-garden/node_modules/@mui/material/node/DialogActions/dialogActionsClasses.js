"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDialogActionsUtilityClass = getDialogActionsUtilityClass;

var _base = require("@mui/base");

function getDialogActionsUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiDialogActions', slot);
}

const dialogActionsClasses = (0, _base.generateUtilityClasses)('MuiDialogActions', ['root', 'spacing']);
var _default = dialogActionsClasses;
exports.default = _default;