"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getImageListUtilityClass = getImageListUtilityClass;

var _base = require("@mui/base");

function getImageListUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiImageList', slot);
}

const imageListClasses = (0, _base.generateUtilityClasses)('MuiImageList', ['root', 'masonry', 'quilted', 'standard', 'woven']);
var _default = imageListClasses;
exports.default = _default;