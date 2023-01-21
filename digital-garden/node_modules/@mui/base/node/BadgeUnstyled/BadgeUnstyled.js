"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@mui/utils");

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _appendOwnerState = _interopRequireDefault(require("../utils/appendOwnerState"));

var _useBadge = _interopRequireDefault(require("./useBadge"));

var _badgeUnstyledClasses = require("./badgeUnstyledClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["anchorOrigin", "classes", "badgeContent", "component", "children", "className", "components", "componentsProps", "invisible", "max", "showZero", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    variant,
    anchorOrigin,
    invisible,
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    badge: ['badge', variant, `anchorOrigin${(0, _utils.unstable_capitalize)(anchorOrigin.vertical)}${(0, _utils.unstable_capitalize)(anchorOrigin.horizontal)}`, invisible && 'invisible']
  };
  return (0, _composeClasses.default)(slots, _badgeUnstyledClasses.getBadgeUtilityClass, classes);
};

const BadgeUnstyled = /*#__PURE__*/React.forwardRef(function BadgeUnstyled(props, ref) {
  const {
    anchorOrigin: anchorOriginProp = {
      vertical: 'top',
      horizontal: 'right'
    },
    classes: classesProp,
    component,
    children,
    className,
    components = {},
    componentsProps = {},
    max: maxProp = 99,
    showZero = false,
    variant: variantProp = 'standard'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    anchorOrigin,
    badgeContent,
    max,
    variant,
    displayValue,
    invisible
  } = (0, _useBadge.default)((0, _extends2.default)({}, props, {
    anchorOrigin: anchorOriginProp,
    max: maxProp,
    variant: variantProp
  }));
  const ownerState = (0, _extends2.default)({}, props, {
    anchorOrigin,
    badgeContent,
    classes: classesProp,
    invisible,
    max,
    variant,
    showZero
  });
  const classes = useUtilityClasses(ownerState);
  const Root = component || components.Root || 'span';
  const rootProps = (0, _appendOwnerState.default)(Root, (0, _extends2.default)({}, other, componentsProps.root), ownerState);
  const Badge = components.Badge || 'span';
  const badgeProps = (0, _appendOwnerState.default)(Badge, componentsProps.badge, ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    ref: ref
  }, other, {
    className: (0, _clsx.default)(classes.root, rootProps.className, className),
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(Badge, (0, _extends2.default)({}, badgeProps, {
      className: (0, _clsx.default)(classes.badge, badgeProps.className),
      children: displayValue
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? BadgeUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOf(['left', 'right']).isRequired,
    vertical: _propTypes.default.oneOf(['bottom', 'top']).isRequired
  }),

  /**
   * The content rendered within the badge.
   */
  badgeContent: _propTypes.default.node,

  /**
   * The badge will be added relative to this node.
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Badge: _propTypes.default.elementType,
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    badge: _propTypes.default.object,
    root: _propTypes.default.object
  }),

  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: _propTypes.default.bool,

  /**
   * Max count to show.
   * @default 99
   */
  max: _propTypes.default.number,

  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: _propTypes.default.bool,

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: _propTypes.default.string
} : void 0;
var _default = BadgeUnstyled;
exports.default = _default;