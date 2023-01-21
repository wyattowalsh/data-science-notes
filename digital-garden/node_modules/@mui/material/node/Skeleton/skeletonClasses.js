"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSkeletonUtilityClass = getSkeletonUtilityClass;

var _base = require("@mui/base");

function getSkeletonUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiSkeleton', slot);
}

const skeletonClasses = (0, _base.generateUtilityClasses)('MuiSkeleton', ['root', 'text', 'rectangular', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
var _default = skeletonClasses;
exports.default = _default;