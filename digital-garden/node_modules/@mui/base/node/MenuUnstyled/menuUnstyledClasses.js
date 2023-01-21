"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMenuUnstyledUtilityClass = getMenuUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(require("../generateUtilityClass"));

var _generateUtilityClasses = _interopRequireDefault(require("../generateUtilityClasses"));

function getMenuUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiMenuUnstyled', slot);
}

const menuUnstyledClasses = (0, _generateUtilityClasses.default)('MuiMenuUnstyled', ['root', 'listbox', 'expanded']);
var _default = menuUnstyledClasses;
exports.default = _default;