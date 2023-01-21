"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAvatarUtilityClass = getAvatarUtilityClass;

var _base = require("@mui/base");

function getAvatarUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAvatar', slot);
}

const avatarClasses = (0, _base.generateUtilityClasses)('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
var _default = avatarClasses;
exports.default = _default;