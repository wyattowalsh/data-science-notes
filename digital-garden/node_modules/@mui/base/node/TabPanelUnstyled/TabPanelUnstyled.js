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

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _tabPanelUnstyledClasses = require("./tabPanelUnstyledClasses");

var _useTabPanel = _interopRequireDefault(require("./useTabPanel"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "className", "value", "components", "componentsProps", "component"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ['root', hidden && 'hidden']
  };
  return (0, _composeClasses.default)(slots, _tabPanelUnstyledClasses.getTabPanelUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/components/tabs/)
 *
 * API:
 *
 * - [TabPanelUnstyled API](https://mui.com/api/tab-panel-unstyled/)
 */


const TabPanelUnstyled = /*#__PURE__*/React.forwardRef(function TabPanelUnstyled(props, ref) {
  var _ref, _componentsProps$root;

  const {
    children,
    className,
    components = {},
    componentsProps = {},
    component
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    hidden,
    getRootProps
  } = (0, _useTabPanel.default)(props);
  const ownerState = (0, _extends2.default)({}, props, {
    hidden
  });
  const classes = useUtilityClasses(ownerState);
  const TabPanelRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  const tabPanelRootProps = (0, _utils.appendOwnerState)(TabPanelRoot, (0, _extends2.default)({}, other, componentsProps.root), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanelRoot, (0, _extends2.default)({}, getRootProps(), {
    ref: ref,
    role: "tabpanel"
  }, tabPanelRootProps, {
    className: (0, _clsx.default)(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className),
    children: !hidden && children
  }));
});
process.env.NODE_ENV !== "production" ? TabPanelUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

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
   * The components used for each slot inside the TabPanel.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the TabPanel.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    root: _propTypes.default.object
  }),

  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
} : void 0;
var _default = TabPanelUnstyled;
exports.default = _default;