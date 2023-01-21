"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStaticWrapperUtilityClass = getStaticWrapperUtilityClass;
exports.pickerStaticWrapperClasses = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _base = require("@mui/base");

var _dimensions = require("../constants/dimensions");

var _WrapperVariantContext = require("./WrapperVariantContext");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["displayStaticWrapperAs"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getStaticWrapperUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiPickerStaticWrapper', slot);
}

const pickerStaticWrapperClasses = (0, _base.generateUtilityClasses)('MuiPickerStaticWrapper', ['root']);
exports.pickerStaticWrapperClasses = pickerStaticWrapperClasses;

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, getStaticWrapperUtilityClass, classes);
};

const PickerStaticWrapperRoot = (0, _styles.styled)('div', {
  name: 'MuiPickerStaticWrapper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  overflow: 'hidden',
  minWidth: _dimensions.DIALOG_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper
}));

function PickerStaticWrapper(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickerStaticWrapper'
  });
  const {
    displayStaticWrapperAs
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const classes = useUtilityClasses(props);
  const isStatic = true;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperVariantContext.IsStaticVariantContext.Provider, {
    value: isStatic,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperVariantContext.WrapperVariantContext.Provider, {
      value: displayStaticWrapperAs,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PickerStaticWrapperRoot, (0, _extends2.default)({
        className: classes.root
      }, other))
    })
  });
}

var _default = PickerStaticWrapper;
exports.default = _default;