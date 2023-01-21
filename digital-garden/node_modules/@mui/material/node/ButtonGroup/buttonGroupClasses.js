"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getButtonGroupUtilityClass = getButtonGroupUtilityClass;

var _base = require("@mui/base");

function getButtonGroupUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiButtonGroup', slot);
}

const buttonGroupClasses = (0, _base.generateUtilityClasses)('MuiButtonGroup', ['root', 'contained', 'outlined', 'text', 'disableElevation', 'disabled', 'fullWidth', 'vertical', 'grouped', 'groupedHorizontal', 'groupedVertical', 'groupedText', 'groupedTextHorizontal', 'groupedTextVertical', 'groupedTextPrimary', 'groupedTextSecondary', 'groupedOutlined', 'groupedOutlinedHorizontal', 'groupedOutlinedVertical', 'groupedOutlinedPrimary', 'groupedOutlinedSecondary', 'groupedContained', 'groupedContainedHorizontal', 'groupedContainedVertical', 'groupedContainedPrimary', 'groupedContainedSecondary']);
var _default = buttonGroupClasses;
exports.default = _default;