"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTabsUtilityClass = getTabsUtilityClass;

var _base = require("@mui/base");

function getTabsUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTabs', slot);
}

const tabsClasses = (0, _base.generateUtilityClasses)('MuiTabs', ['root', 'vertical', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']);
var _default = tabsClasses;
exports.default = _default;