"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSpeedDialUtilityClass = getSpeedDialUtilityClass;

var _base = require("@mui/base");

function getSpeedDialUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiSpeedDial', slot);
}

const speedDialClasses = (0, _base.generateUtilityClasses)('MuiSpeedDial', ['root', 'fab', 'directionUp', 'directionDown', 'directionLeft', 'directionRight', 'actions', 'actionsClosed']);
var _default = speedDialClasses;
exports.default = _default;