"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimelineOppositeContentUtilityClass = getTimelineOppositeContentUtilityClass;

var _base = require("@mui/base");

function getTimelineOppositeContentUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTimelineOppositeContent', slot);
}

const timelineOppositeContentClasses = (0, _base.generateUtilityClasses)('MuiTimelineOppositeContent', ['root', 'positionLeft', 'positionRight', 'positionAlternate']);
var _default = timelineOppositeContentClasses;
exports.default = _default;