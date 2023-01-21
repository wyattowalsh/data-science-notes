"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@mui/utils");

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _SelectUnstyledContext = require("../SelectUnstyled/SelectUnstyledContext");

var _optionUnstyledClasses = require("./optionUnstyledClasses");

var _appendOwnerState = _interopRequireDefault(require("../utils/appendOwnerState"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "className", "component", "components", "componentsProps", "disabled", "value"];

function useUtilityClasses(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', highlighted && 'highlighted', selected && 'selected']
  };
  return (0, _composeClasses.default)(slots, _optionUnstyledClasses.getOptionUnstyledUtilityClass, {});
}
/**
 * An unstyled option to be used within a SelectUnstyled.
 */


const OptionUnstyled = /*#__PURE__*/_react.default.forwardRef(function OptionUnstyled(props, ref) {
  var _componentsProps$root;

  const {
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    disabled,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);

  const selectContext = _react.default.useContext(_SelectUnstyledContext.SelectUnstyledContext);

  if (!selectContext) {
    throw new Error('OptionUnstyled must be used within a SelectUnstyled');
  }

  const Root = component || components.Root || 'li';
  const selectOption = {
    value,
    label: children,
    disabled
  };
  const optionState = selectContext.getOptionState(selectOption);
  const optionProps = selectContext.getOptionProps(selectOption);
  const listboxRef = selectContext.listboxRef;
  const ownerState = (0, _extends2.default)({}, props, optionState);

  const optionRef = _react.default.useRef(null);

  const handleRef = (0, _utils.unstable_useForkRef)(ref, optionRef);

  _react.default.useEffect(() => {
    // Scroll to the currently highlighted option
    if (optionState.highlighted) {
      if (!listboxRef.current || !optionRef.current) {
        return;
      }

      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();

      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [optionState.highlighted, listboxRef]);

  const classes = useUtilityClasses(ownerState);
  const rootProps = (0, _appendOwnerState.default)(Root, (0, _extends2.default)({}, other, optionProps, componentsProps.root, {
    ref: handleRef,
    className: (0, _clsx.default)(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});

process.env.NODE_ENV !== "production" ? OptionUnstyled.propTypes
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
   * The components used for each slot inside the OptionUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    root: _propTypes.default.object
  }),

  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * The value of the option.
   */
  value: _propTypes.default.any.isRequired
} : void 0;
/**
 * An unstyled option to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 *
 * - [OptionUnstyled API](https://mui.com/api/option-unstyled/)
 */

var _default = /*#__PURE__*/_react.default.memo(OptionUnstyled);

exports.default = _default;