"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getImageListItemUtilityClass = getImageListItemUtilityClass;

var _base = require("@mui/base");

function getImageListItemUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiImageListItem', slot);
}

const imageListItemClasses = (0, _base.generateUtilityClasses)('MuiImageListItem', ['root', 'img', 'standard', 'woven', 'masonry', 'quilted']);
var _default = imageListItemClasses;
exports.default = _default;