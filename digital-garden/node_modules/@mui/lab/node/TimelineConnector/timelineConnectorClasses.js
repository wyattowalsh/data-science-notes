"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimelineConnectorUtilityClass = getTimelineConnectorUtilityClass;

var _base = require("@mui/base");

function getTimelineConnectorUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTimelineConnector', slot);
}

const timelineConnectorClasses = (0, _base.generateUtilityClasses)('MuiTimelineConnector', ['root']);
var _default = timelineConnectorClasses;
exports.default = _default;