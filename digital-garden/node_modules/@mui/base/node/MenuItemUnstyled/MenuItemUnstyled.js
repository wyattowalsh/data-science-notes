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

var _utils = require("../utils");

var _menuItemUnstyledClasses = require("./menuItemUnstyledClasses");

var _useMenuItem = _interopRequireDefault(require("./useMenuItem"));

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "className", "disabled", "component", "components", "componentsProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getUtilityClasses(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  return (0, _composeClasses.default)(slots, _menuItemUnstyledClasses.getMenuItemUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuItemUnstyled API](https://mui.com/base/api/menu-item-unstyled/)
 */


const MenuItemUnstyled = /*#__PURE__*/React.forwardRef(function MenuItemUnstyled(props, ref) {
  var _ref, _componentsProps$root;

  const {
    children,
    className,
    disabled = false,
    component,
    components = {},
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'li';
  const {
    getRootProps,
    itemState,
    focusVisible
  } = (0, _useMenuItem.default)({
    component: Root,
    disabled,
    ref
  });

  if (itemState == null) {
    return null;
  }

  const ownerState = (0, _extends2.default)({}, props, itemState, {
    focusVisible
  });
  const classes = getUtilityClasses(ownerState);
  const rootProps = (0, _utils.appendOwnerState)(Root, (0, _extends2.default)({}, other, componentsProps.root, getRootProps(other), {
    className: (0, _clsx.default)(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? MenuItemUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  component: _propTypes.default.elementType,

  /**
   * @ignore
   */
  components: _propTypes.default.shape({
    Root: _propTypes.default.elementType
  }),

  /**
   * @ignore
   */
  componentsProps: _propTypes.default.shape({
    root: _propTypes.default.object
  }),

  /**
   * If `true`, the menu item will be disabled.
   * @default false
   */
  disabled: _propTypes.default.bool
} : void 0;
var _default = MenuItemUnstyled;
exports.default = _default;