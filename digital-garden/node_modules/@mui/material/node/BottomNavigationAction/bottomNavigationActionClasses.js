"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getBottomNavigationActionUtilityClass = getBottomNavigationActionUtilityClass;

var _base = require("@mui/base");

function getBottomNavigationActionUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiBottomNavigationAction', slot);
}

const bottomNavigationActionClasses = (0, _base.generateUtilityClasses)('MuiBottomNavigationAction', ['root', 'iconOnly', 'selected', 'label']);
var _default = bottomNavigationActionClasses;
exports.default = _default;