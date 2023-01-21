"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTabPanelUtilityClass = getTabPanelUtilityClass;

var _base = require("@mui/base");

function getTabPanelUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTabPanel', slot);
}

const tabPanelClasses = (0, _base.generateUtilityClasses)('MuiTabPanel', ['root']);
var _default = tabPanelClasses;
exports.default = _default;