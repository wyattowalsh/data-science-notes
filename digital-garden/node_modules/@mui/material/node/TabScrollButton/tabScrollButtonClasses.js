"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTabScrollButtonUtilityClass = getTabScrollButtonUtilityClass;

var _base = require("@mui/base");

function getTabScrollButtonUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTabScrollButton', slot);
}

const tabScrollButtonClasses = (0, _base.generateUtilityClasses)('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);
var _default = tabScrollButtonClasses;
exports.default = _default;