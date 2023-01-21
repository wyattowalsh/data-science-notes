"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDialogTitleUtilityClass = getDialogTitleUtilityClass;

var _base = require("@mui/base");

function getDialogTitleUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiDialogTitle', slot);
}

const dialogTitleClasses = (0, _base.generateUtilityClasses)('MuiDialogTitle', ['root']);
var _default = dialogTitleClasses;
exports.default = _default;