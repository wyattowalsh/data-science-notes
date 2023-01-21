"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getRatingUtilityClass = getRatingUtilityClass;

var _base = require("@mui/base");

function getRatingUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiRating', slot);
}

const ratingClasses = (0, _base.generateUtilityClasses)('MuiRating', ['root', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'readOnly', 'disabled', 'focusVisible', 'visuallyHidden', 'pristine', 'label', 'labelEmptyValueActive', 'icon', 'iconEmpty', 'iconFilled', 'iconHover', 'iconFocus', 'iconActive', 'decimal']);
var _default = ratingClasses;
exports.default = _default;