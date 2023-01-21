"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTableCellUtilityClass = getTableCellUtilityClass;

var _base = require("@mui/base");

function getTableCellUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTableCell', slot);
}

const tableCellClasses = (0, _base.generateUtilityClasses)('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
var _default = tableCellClasses;
exports.default = _default;