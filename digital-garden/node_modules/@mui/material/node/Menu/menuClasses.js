"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMenuUtilityClass = getMenuUtilityClass;

var _base = require("@mui/base");

function getMenuUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiMenu', slot);
}

const menuClasses = (0, _base.generateUtilityClasses)('MuiMenu', ['root', 'paper', 'list']);
var _default = menuClasses;
exports.default = _default;