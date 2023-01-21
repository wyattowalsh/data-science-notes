"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSelectUtilityClasses = getSelectUtilityClasses;

var _base = require("@mui/base");

function getSelectUtilityClasses(slot) {
  return (0, _base.generateUtilityClass)('MuiSelect', slot);
}

const selectClasses = (0, _base.generateUtilityClasses)('MuiSelect', ['select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput']);
var _default = selectClasses;
exports.default = _default;