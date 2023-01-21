"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDrawerUtilityClass = getDrawerUtilityClass;

var _base = require("@mui/base");

function getDrawerUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiDrawer', slot);
}

const drawerClasses = (0, _base.generateUtilityClasses)('MuiDrawer', ['root', 'docked', 'paper', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedRight', 'paperAnchorDockedTop', 'paperAnchorDockedBottom', 'modal']);
var _default = drawerClasses;
exports.default = _default;