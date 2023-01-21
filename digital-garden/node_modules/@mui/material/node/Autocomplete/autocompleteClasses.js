"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAutocompleteUtilityClass = getAutocompleteUtilityClass;

var _base = require("@mui/base");

function getAutocompleteUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiAutocomplete', slot);
}

const autocompleteClasses = (0, _base.generateUtilityClasses)('MuiAutocomplete', ['root', 'fullWidth', 'focused', 'focusVisible', 'tag', 'tagSizeSmall', 'tagSizeMedium', 'hasPopupIcon', 'hasClearIcon', 'inputRoot', 'input', 'inputFocused', 'endAdornment', 'clearIndicator', 'popupIndicator', 'popupIndicatorOpen', 'popper', 'popperDisablePortal', 'paper', 'listbox', 'loading', 'noOptions', 'option', 'groupLabel', 'groupUl']);
var _default = autocompleteClasses;
exports.default = _default;