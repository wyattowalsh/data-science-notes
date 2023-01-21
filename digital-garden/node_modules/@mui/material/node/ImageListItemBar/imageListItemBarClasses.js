"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getImageListItemBarUtilityClass = getImageListItemBarUtilityClass;

var _base = require("@mui/base");

function getImageListItemBarUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiImageListItemBar', slot);
}

const imageListItemBarClasses = (0, _base.generateUtilityClasses)('MuiImageListItemBar', ['root', 'positionBottom', 'positionTop', 'positionBelow', 'titleWrap', 'titleWrapBottom', 'titleWrapTop', 'titleWrapBelow', 'titleWrapActionPosLeft', 'titleWrapActionPosRight', 'title', 'subtitle', 'actionIcon', 'actionIconActionPosLeft', 'actionIconActionPosRight']);
var _default = imageListItemBarClasses;
exports.default = _default;