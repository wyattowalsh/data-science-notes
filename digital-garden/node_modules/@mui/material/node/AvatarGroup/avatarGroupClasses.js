"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAvatarGroupUtilityClass = getAvatarGroupUtilityClass;

var _base = require("@mui/base");

function getAvatarGroupUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAvatarGroup', slot);
}

const avatarGroupClasses = (0, _base.generateUtilityClasses)('MuiAvatarGroup', ['root', 'avatar']);
var _default = avatarGroupClasses;
exports.default = _default;