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

var _appendOwnerState = _interopRequireDefault(require("../utils/appendOwnerState"));

var _MenuUnstyledContext = _interopRequireDefault(require("./MenuUnstyledContext"));

var _menuUnstyledClasses = require("./menuUnstyledClasses");

var _useMenu = _interopRequireDefault(require("./useMenu"));

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _PopperUnstyled = _interopRequireDefault(require("../PopperUnstyled"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["actions", "anchorEl", "children", "className", "component", "components", "componentsProps", "onClose", "open"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getUtilityClasses(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ['root', open && 'expanded'],
    listbox: ['listbox', open && 'expanded']
  };
  return (0, _composeClasses.default)(slots, _menuUnstyledClasses.getMenuUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuUnstyled API](https://mui.com/base/api/menu-unstyled/)
 */


const MenuUnstyled = /*#__PURE__*/React.forwardRef(function MenuUnstyled(props, forwardedRef) {
  var _componentsProps$list, _componentsProps$list2, _ref, _componentsProps$root, _components$Listbox, _componentsProps$list3;

  const {
    actions,
    anchorEl,
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    onClose,
    open = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    registerItem,
    unregisterItem,
    getListboxProps,
    getItemProps,
    getItemState,
    highlightFirstItem,
    highlightLastItem
  } = (0, _useMenu.default)({
    open,
    onClose,
    listboxRef: (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id
  });
  React.useImperativeHandle(actions, () => ({
    highlightFirstItem,
    highlightLastItem
  }), [highlightFirstItem, highlightLastItem]);
  const ownerState = (0, _extends2.default)({}, props, {
    open
  });
  const classes = getUtilityClasses(ownerState);
  const Popper = (_ref = component != null ? component : components.Root) != null ? _ref : _PopperUnstyled.default;
  const popperProps = (0, _appendOwnerState.default)(Popper, (0, _extends2.default)({}, other, {
    anchorEl,
    open,
    keepMounted: true,
    role: undefined
  }, componentsProps.root, {
    className: (0, _clsx.default)(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  const Listbox = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  const listboxProps = (0, _appendOwnerState.default)(Listbox, (0, _extends2.default)({}, componentsProps.listbox, getListboxProps(), {
    className: (0, _clsx.default)(classes.listbox, (_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className)
  }), ownerState);
  const contextValue = {
    registerItem,
    unregisterItem,
    getItemState,
    getItemProps,
    open
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Popper, (0, _extends2.default)({}, popperProps, {
    ref: forwardedRef,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Listbox, (0, _extends2.default)({}, listboxProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuUnstyledContext.default.Provider, {
        value: contextValue,
        children: children
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" ? MenuUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: _utils.refType,

  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   */
  anchorEl: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_utils.HTMLElementType, _propTypes.default.object, _propTypes.default.func]),

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
    Listbox: _propTypes.default.elementType,
    Root: _propTypes.default.elementType
  }),

  /**
   * @ignore
   */
  componentsProps: _propTypes.default.shape({
    listbox: _propTypes.default.object,
    root: _propTypes.default.object
  }),

  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: _propTypes.default.func,

  /**
   * Controls whether the menu is displayed.
   * @default false
   */
  open: _propTypes.default.bool
} : void 0;
var _default = MenuUnstyled;
exports.default = _default;