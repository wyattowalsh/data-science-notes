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

var _utils2 = require("../SelectUnstyled/utils");

var _useSelect = _interopRequireDefault(require("../SelectUnstyled/useSelect"));

var _utils3 = require("../utils");

var _PopperUnstyled = _interopRequireDefault(require("../PopperUnstyled"));

var _SelectUnstyledContext = require("../SelectUnstyled/SelectUnstyledContext");

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _selectUnstyledClasses = require("../SelectUnstyled/selectUnstyledClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["autoFocus", "children", "className", "component", "components", "componentsProps", "defaultListboxOpen", "defaultValue", "disabled", "listboxOpen", "onChange", "onListboxOpenChange", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function defaultRenderMultipleValues(selectedOptions) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
    children: selectedOptions.map(o => o.label).join(', ')
  });
}

function useUtilityClasses(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active', open && 'expanded'],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper']
  };
  return (0, _composeClasses.default)(slots, _selectUnstyledClasses.getSelectUnstyledUtilityClass, {});
}
/**
 * The foundation for building custom-styled multi-selection select components.
 */


const MultiSelectUnstyled = /*#__PURE__*/React.forwardRef(function MultiSelectUnstyled(props, ref) {
  var _props$renderValue, _ref, _components$Listbox, _components$Popper, _componentsProps$list, _componentsProps$list2, _componentsProps$root, _componentsProps$list3, _componentsProps$popp;

  const {
    autoFocus,
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultListboxOpen = false,
    defaultValue = [],
    disabled: disabledProp,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    value: valueProp
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const renderValue = (_props$renderValue = props.renderValue) != null ? _props$renderValue : defaultRenderMultipleValues;
  const [groupedOptions, setGroupedOptions] = React.useState([]);
  const options = React.useMemo(() => (0, _utils2.flattenOptionGroups)(groupedOptions), [groupedOptions]);
  const [listboxOpen, setListboxOpen] = (0, _utils.unstable_useControlled)({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: 'MultiSelectUnstyled',
    state: 'listboxOpen'
  });
  React.useEffect(() => {
    setGroupedOptions((0, _utils2.getOptionsFromChildren)(children));
  }, [children]);
  const [buttonDefined, setButtonDefined] = React.useState(false);
  const buttonRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const Button = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  const ListboxRoot = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  const Popper = (_components$Popper = components.Popper) != null ? _components$Popper : _PopperUnstyled.default;

  const handleButtonRefChange = element => {
    buttonRef.current = element;

    if (element != null) {
      setButtonDefined(true);
    }
  };

  const handleButtonRef = (0, _utils.unstable_useForkRef)(ref, handleButtonRefChange);
  const handleListboxRef = (0, _utils.unstable_useForkRef)(listboxRef, (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref);
  React.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  const handleOpenChange = isOpen => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };

  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    value
  } = (0, _useSelect.default)({
    buttonComponent: Button,
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id,
    listboxRef: handleListboxRef,
    multiple: true,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options,
    value: valueProp
  });
  const ownerState = (0, _extends2.default)({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value
  });
  const classes = useUtilityClasses(ownerState);
  const selectedOptions = React.useMemo(() => {
    if (value == null) {
      return [];
    }

    return options.filter(o => value.includes(o.value));
  }, [options, value]);
  const buttonProps = (0, _utils3.appendOwnerState)(Button, (0, _extends2.default)({}, getButtonProps(), other, componentsProps.root, {
    className: (0, _clsx.default)(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  const listboxProps = (0, _utils3.appendOwnerState)(ListboxRoot, (0, _extends2.default)({}, getListboxProps(), componentsProps.listbox, {
    className: (0, _clsx.default)((_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className, classes.listbox)
  }), ownerState); // Popper must be a (non-host) component, therefore ownerState will be present within the props

  const popperProps = (0, _utils3.appendOwnerState)(Popper, (0, _extends2.default)({
    open: listboxOpen,
    anchorEl: buttonRef.current,
    placement: 'bottom-start',
    disablePortal: true,
    role: undefined
  }, componentsProps.popper, {
    className: (0, _clsx.default)((_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className, classes.popper)
  }), ownerState);
  const context = {
    getOptionProps,
    getOptionState,
    listboxRef
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, (0, _extends2.default)({}, buttonProps, {
      children: renderValue(selectedOptions)
    })), buttonDefined && /*#__PURE__*/(0, _jsxRuntime.jsx)(Popper, (0, _extends2.default)({}, popperProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ListboxRoot, (0, _extends2.default)({}, listboxProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectUnstyledContext.SelectUnstyledContext.Provider, {
          value: context,
          children: children
        })
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" ? MultiSelectUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: _propTypes.default.bool,

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
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .shape({
    Listbox: _propTypes.default.elementType,
    Popper: _propTypes.default.elementType,
    Root: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    listbox: _propTypes.default.object,
    popper: _propTypes.default.object,
    root: _propTypes.default.object
  }),

  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: _propTypes.default.bool,

  /**
   * The default selected values. Use when the component is not controlled.
   * @default []
   */
  defaultValue: _propTypes.default.array,

  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: _propTypes.default.bool,

  /**
   * Callback fired when an option is selected.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: _propTypes.default.func,

  /**
   * Function that customizes the rendering of the selected values.
   */
  renderValue: _propTypes.default.func,

  /**
   * The selected values.
   * Set to an empty array to deselect all options.
   */
  value: _propTypes.default.array
} : void 0;
/**
 * The foundation for building custom-styled multi-selection select components.
 *
 * Demos:
 *
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 *
 * - [MultiSelectUnstyled API](https://mui.com/api/multi-select-unstyled/)
 */

var _default = MultiSelectUnstyled;
exports.default = _default;