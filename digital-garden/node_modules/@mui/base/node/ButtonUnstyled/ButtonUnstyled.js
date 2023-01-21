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

var _buttonUnstyledClasses = require("./buttonUnstyledClasses");

var _useButton = _interopRequireDefault(require("./useButton"));

var _appendOwnerState = _interopRequireDefault(require("../utils/appendOwnerState"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["className", "component", "components", "componentsProps", "children", "disabled", "action", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseLeave"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active']
  };
  return (0, _composeClasses.default)(slots, _buttonUnstyledClasses.getButtonUnstyledUtilityClass, {});
};
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Button](https://mui.com/base/react-button/)
 *
 * API:
 *
 * - [ButtonUnstyled API](https://mui.com/base/api/button-unstyled/)
 */


const ButtonUnstyled = /*#__PURE__*/React.forwardRef(function ButtonUnstyled(props, forwardedRef) {
  var _ref, _componentsProps$root;

  const {
    className,
    component,
    components = {},
    componentsProps = {},
    children,
    action
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const buttonRef = React.useRef();
  const handleRef = (0, _utils.unstable_useForkRef)(buttonRef, forwardedRef);
  const ButtonRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = (0, _useButton.default)((0, _extends2.default)({}, props, {
    component: ButtonRoot,
    ref: handleRef
  }));
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = (0, _extends2.default)({}, props, {
    active,
    focusVisible
  });
  const classes = useUtilityClasses(ownerState);
  const buttonRootProps = (0, _appendOwnerState.default)(ButtonRoot, (0, _extends2.default)({}, getRootProps(), other, componentsProps.root, {
    className: (0, _clsx.default)(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ButtonRoot, (0, _extends2.default)({}, buttonRootProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? ButtonUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.shape({
      focusVisible: _propTypes.default.func.isRequired
    })
  })]),

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * @default 'button'
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the Button.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Button.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    root: _propTypes.default.object
  }),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * @ignore
   */
  onFocusVisible: _propTypes.default.func
} : void 0;
var _default = ButtonUnstyled;
exports.default = _default;