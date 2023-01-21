"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getListItemAvatarUtilityClass = getListItemAvatarUtilityClass;

var _base = require("@mui/base");

function getListItemAvatarUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiListItemAvatar', slot);
}

const listItemAvatarClasses = (0, _base.generateUtilityClasses)('MuiListItemAvatar', ['root', 'alignItemsFlexStart']);
var _default = listItemAvatarClasses;
exports.default = _default;