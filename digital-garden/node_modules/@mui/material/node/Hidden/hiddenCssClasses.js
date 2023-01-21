"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getHiddenCssUtilityClass = getHiddenCssUtilityClass;

var _base = require("@mui/base");

function getHiddenCssUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('PrivateHiddenCss', slot);
}

const hiddenCssClasses = (0, _base.generateUtilityClasses)('PrivateHiddenCss', ['root', 'xlDown', 'xlUp', 'onlyXl', 'lgDown', 'lgUp', 'onlyLg', 'mdDown', 'mdUp', 'onlyMd', 'smDown', 'smUp', 'onlySm', 'xsDown', 'xsUp', 'onlyXs']);
var _default = hiddenCssClasses;
exports.default = _default;