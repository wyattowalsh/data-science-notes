"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getBottomNavigationUtilityClass = getBottomNavigationUtilityClass;

var _base = require("@mui/base");

function getBottomNavigationUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiBottomNavigation', slot);
}

const bottomNavigationClasses = (0, _base.generateUtilityClasses)('MuiBottomNavigation', ['root']);
var _default = bottomNavigationClasses;
exports.default = _default;