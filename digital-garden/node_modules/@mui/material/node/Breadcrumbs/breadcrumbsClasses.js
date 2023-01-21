"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getBreadcrumbsUtilityClass = getBreadcrumbsUtilityClass;

var _base = require("@mui/base");

function getBreadcrumbsUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiBreadcrumbs', slot);
}

const breadcrumbsClasses = (0, _base.generateUtilityClasses)('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']);
var _default = breadcrumbsClasses;
exports.default = _default;