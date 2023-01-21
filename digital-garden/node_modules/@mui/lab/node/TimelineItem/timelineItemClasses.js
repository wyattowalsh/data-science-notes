"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimelineItemUtilityClass = getTimelineItemUtilityClass;

var _base = require("@mui/base");

function getTimelineItemUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTimelineItem', slot);
}

const timelineItemClasses = (0, _base.generateUtilityClasses)('MuiTimelineItem', ['root', 'positionLeft', 'positionRight', 'positionAlternate', 'missingOppositeContent']);
var _default = timelineItemClasses;
exports.default = _default;