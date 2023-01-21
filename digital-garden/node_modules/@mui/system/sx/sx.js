"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styleFunctionSx = _interopRequireDefault(require("../styleFunctionSx"));

function sx(styles) {
  return ({
    theme
  }) => (0, _styleFunctionSx.default)({
    sx: styles,
    theme
  });
}

var _default = sx;
exports.default = _default;