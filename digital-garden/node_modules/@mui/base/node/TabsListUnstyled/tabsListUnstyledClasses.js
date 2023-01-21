"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTabsListUnstyledUtilityClass = getTabsListUnstyledUtilityClass;

var _generateUtilityClass = _interopRequireDefault(require("../generateUtilityClass"));

var _generateUtilityClasses = _interopRequireDefault(require("../generateUtilityClasses"));

function getTabsListUnstyledUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('TabsListUnstyled', slot);
}

const tabsListUnstyledClasses = (0, _generateUtilityClasses.default)('TabsListUnstyled', ['root', 'horizontal', 'vertical']);
var _default = tabsListUnstyledClasses;
exports.default = _default;