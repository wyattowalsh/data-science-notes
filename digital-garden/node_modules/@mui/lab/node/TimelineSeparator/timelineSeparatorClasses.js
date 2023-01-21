"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimelineSeparatorUtilityClass = getTimelineSeparatorUtilityClass;

var _base = require("@mui/base");

function getTimelineSeparatorUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTimelineSeparator', slot);
}

const timelineSeparatorClasses = (0, _base.generateUtilityClasses)('MuiTimelineSeparator', ['root']);
var _default = timelineSeparatorClasses;
exports.default = _default;