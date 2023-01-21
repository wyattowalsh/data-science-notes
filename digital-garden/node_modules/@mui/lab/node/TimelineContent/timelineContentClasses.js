"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimelineContentUtilityClass = getTimelineContentUtilityClass;

var _base = require("@mui/base");

function getTimelineContentUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTimelineContent', slot);
}

const timelineContentClasses = (0, _base.generateUtilityClasses)('MuiTimelineContent', ['root', 'positionLeft', 'positionRight', 'positionAlternate']);
var _default = timelineContentClasses;
exports.default = _default;