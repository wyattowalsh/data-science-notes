"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@mui/material/styles");

var _utils = require("@mui/material/utils");

var _base = require("@mui/base");

var _timelineDotClasses = require("./timelineDotClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["className", "color", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    color,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, color !== 'inherit' && `${variant}${(0, _utils.capitalize)(color)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _timelineDotClasses.getTimelineDotUtilityClass, classes);
};

const TimelineDotRoot = (0, _styles.styled)('span', {
  name: 'MuiTimelineDot',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.color !== 'inherit' && `${ownerState.variant}${(0, _utils.capitalize)(ownerState.color)}`], styles[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => (0, _extends2.default)({
  display: 'flex',
  alignSelf: 'baseline',
  borderStyle: 'solid',
  borderWidth: 2,
  padding: 4,
  borderRadius: '50%',
  boxShadow: theme.shadows[1],
  margin: '11.5px 0'
}, ownerState.variant === 'filled' && (0, _extends2.default)({
  borderColor: 'transparent'
}, ownerState.color !== 'inherit' && (0, _extends2.default)({}, ownerState.color === 'grey' ? {
  color: theme.palette.grey[50],
  backgroundColor: theme.palette.grey[400]
} : {
  color: theme.palette[ownerState.color].contrastText,
  backgroundColor: theme.palette[ownerState.color].main
})), ownerState.variant === 'outlined' && (0, _extends2.default)({
  boxShadow: 'none',
  backgroundColor: 'transparent'
}, ownerState.color !== 'inherit' && (0, _extends2.default)({}, ownerState.color === 'grey' ? {
  borderColor: theme.palette.grey[400]
} : {
  borderColor: theme.palette[ownerState.color].main
}))));
const TimelineDot = /*#__PURE__*/React.forwardRef(function TimelineDot(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiTimelineDot'
  });
  const {
    className,
    color = 'grey',
    variant = 'filled'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    color,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TimelineDotRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? TimelineDot.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The dot can have a different colors.
   * @default 'grey'
   */
  color: _propTypes.default.oneOf(['error', 'grey', 'info', 'inherit', 'primary', 'secondary', 'success', 'warning']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),

  /**
   * The dot can appear filled or outlined.
   * @default 'filled'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['filled', 'outlined']), _propTypes.default.string])
} : void 0;
var _default = TimelineDot;
exports.default = _default;