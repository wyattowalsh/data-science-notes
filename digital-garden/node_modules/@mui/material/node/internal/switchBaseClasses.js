"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSwitchBaseUtilityClass = getSwitchBaseUtilityClass;

var _base = require("@mui/base");

function getSwitchBaseUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('PrivateSwitchBase', slot);
}

const switchBaseClasses = (0, _base.generateUtilityClasses)('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
var _default = switchBaseClasses;
exports.default = _default;