"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAppBarUtilityClass = getAppBarUtilityClass;

var _base = require("@mui/base");

function getAppBarUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAppBar', slot);
}

const appBarClasses = (0, _base.generateUtilityClasses)('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent']);
var _default = appBarClasses;
exports.default = _default;