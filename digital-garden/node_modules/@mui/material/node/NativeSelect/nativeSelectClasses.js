"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getNativeSelectUtilityClasses = getNativeSelectUtilityClasses;

var _base = require("@mui/base");

function getNativeSelectUtilityClasses(slot) {
  return (0, _base.generateUtilityClass)('MuiNativeSelect', slot);
}

const nativeSelectClasses = (0, _base.generateUtilityClasses)('MuiNativeSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput']);
var _default = nativeSelectClasses;
exports.default = _default;