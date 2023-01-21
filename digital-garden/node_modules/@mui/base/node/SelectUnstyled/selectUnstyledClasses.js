"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSelectUnstyledUtilityClass = getSelectUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(require("../generateUtilityClass"));

var _generateUtilityClasses = _interopRequireDefault(require("../generateUtilityClasses"));

function getSelectUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiSelectUnstyled', slot);
}

const selectUnstyledClasses = (0, _generateUtilityClasses.default)('MuiSelectUnstyled', ['root', 'button', 'listbox', 'popper', 'active', 'expanded', 'disabled', 'focusVisible']);
var _default = selectUnstyledClasses;
exports.default = _default;