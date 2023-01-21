"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimelineUtilityClass = getTimelineUtilityClass;

var _base = require("@mui/base");

function getTimelineUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTimeline', slot);
}

const timelineClasses = (0, _base.generateUtilityClasses)('MuiTimeline', ['root', 'positionLeft', 'positionRight', 'positionAlternate']);
var _default = timelineClasses;
exports.default = _default;