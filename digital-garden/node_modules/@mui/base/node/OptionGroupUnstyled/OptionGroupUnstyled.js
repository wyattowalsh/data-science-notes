"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _optionGroupUnstyledClasses = require("./optionGroupUnstyledClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["className", "component", "components", "disabled", "componentsProps"];

function useUtilityClasses(disabled) {
  const slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list']
  };
  return (0, _composeClasses.default)(slots, _optionGroupUnstyledClasses.getOptionGroupUnstyledUtilityClass, {});
}
/**
 * An unstyled option group to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 *
 * - [OptionGroupUnstyled API](https://mui.com/api/option-group-unstyled/)
 */


const OptionGroupUnstyled = /*#__PURE__*/_react.default.forwardRef(function OptionGroupUnstyled(props, ref) {
  var _componentsProps$root, _componentsProps$labe, _componentsProps$list;

  const {
    className,
    component,
    components = {},
    disabled = false,
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const Root = component || (components == null ? void 0 : components.Root) || 'li';
  const Label = (components == null ? void 0 : components.Label) || 'span';
  const List = (components == null ? void 0 : components.List) || 'ul';
  const classes = useUtilityClasses(disabled);
  const rootProps = (0, _extends2.default)({}, other, {
    ref
  }, componentsProps.root, {
    className: (0, _clsx.default)(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  });
  const labelProps = (0, _extends2.default)({}, componentsProps.label, {
    className: (0, _clsx.default)(classes.label, (_componentsProps$labe = componentsProps.label) == null ? void 0 : _componentsProps$labe.className)
  });
  const listProps = (0, _extends2.default)({}, componentsProps.list, {
    className: (0, _clsx.default)(classes.list, (_componentsProps$list = componentsProps.list) == null ? void 0 : _componentsProps$list.className)
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Label, (0, _extends2.default)({}, labelProps, {
      children: props.label
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(List, (0, _extends2.default)({}, listProps, {
      children: props.children
    }))]
  }));
});

process.env.NODE_ENV !== "production" ? OptionGroupUnstyled.propTypes
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
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to components.Root.
   * If both are provided, the component is used.
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the OptionGroupUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Label: _propTypes.default.elementType,
    List: _propTypes.default.elementType,
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    label: _propTypes.default.object,
    list: _propTypes.default.object,
    root: _propTypes.default.object
  }),

  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * The human-readable description of the group.
   */
  label: _propTypes.default.node
} : void 0;
var _default = OptionGroupUnstyled;
exports.default = _default;