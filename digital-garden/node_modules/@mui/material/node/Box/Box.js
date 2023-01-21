"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = require("@mui/system");

var _className = require("../className");

var _styles = require("../styles");

const defaultTheme = (0, _styles.createTheme)();
/**
 * @ignore - do not document.
 */

const Box = (0, _system.createBox)({
  defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: _className.unstable_ClassNameGenerator.generate
});
var _default = Box;
exports.default = _default;