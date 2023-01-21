import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_useForkRef as useForkRef, unstable_useControlled as useControlled } from '@mui/utils';
import { flattenOptionGroups, getOptionsFromChildren } from '../SelectUnstyled/utils';
import useSelect from '../SelectUnstyled/useSelect';
import { appendOwnerState } from '../utils';
import PopperUnstyled from '../PopperUnstyled';
import { SelectUnstyledContext } from '../SelectUnstyled/SelectUnstyledContext';
import composeClasses from '../composeClasses';
import { getSelectUnstyledUtilityClass } from '../SelectUnstyled/selectUnstyledClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function defaultRenderMultipleValues(selectedOptions) {
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: selectedOptions.map(function (o) {
      return o.label;
    }).join(', ')
  });
}

function useUtilityClasses(ownerState) {
  var active = ownerState.active,
      disabled = ownerState.disabled,
      open = ownerState.open,
      focusVisible = ownerState.focusVisible;
  var slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active', open && 'expanded'],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper']
  };
  return composeClasses(slots, getSelectUnstyledUtilityClass, {});
}
/**
 * The foundation for building custom-styled multi-selection select components.
 */


var MultiSelectUnstyled = /*#__PURE__*/React.forwardRef(function MultiSelectUnstyled(props, ref) {
  var _props$renderValue, _ref, _components$Listbox, _components$Popper, _componentsProps$list, _componentsProps$list2, _componentsProps$root, _componentsProps$list3, _componentsProps$popp;

  var autoFocus = props.autoFocus,
      children = props.children,
      className = props.className,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      _props$defaultListbox = props.defaultListboxOpen,
      defaultListboxOpen = _props$defaultListbox === void 0 ? false : _props$defaultListbox,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? [] : _props$defaultValue,
      disabledProp = props.disabled,
      listboxOpenProp = props.listboxOpen,
      onChange = props.onChange,
      onListboxOpenChange = props.onListboxOpenChange,
      valueProp = props.value,
      other = _objectWithoutProperties(props, ["autoFocus", "children", "className", "component", "components", "componentsProps", "defaultListboxOpen", "defaultValue", "disabled", "listboxOpen", "onChange", "onListboxOpenChange", "value"]);

  var renderValue = (_props$renderValue = props.renderValue) != null ? _props$renderValue : defaultRenderMultipleValues;

  var _React$useState = React.useState([]),
      groupedOptions = _React$useState[0],
      setGroupedOptions = _React$useState[1];

  var options = React.useMemo(function () {
    return flattenOptionGroups(groupedOptions);
  }, [groupedOptions]);

  var _useControlled = useControlled({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: 'MultiSelectUnstyled',
    state: 'listboxOpen'
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      listboxOpen = _useControlled2[0],
      setListboxOpen = _useControlled2[1];

  React.useEffect(function () {
    setGroupedOptions(getOptionsFromChildren(children));
  }, [children]);

  var _React$useState2 = React.useState(false),
      buttonDefined = _React$useState2[0],
      setButtonDefined = _React$useState2[1];

  var buttonRef = React.useRef(null);
  var listboxRef = React.useRef(null);
  var Button = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';
  var ListboxRoot = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  var Popper = (_components$Popper = components.Popper) != null ? _components$Popper : PopperUnstyled;

  var handleButtonRefChange = function handleButtonRefChange(element) {
    buttonRef.current = element;

    if (element != null) {
      setButtonDefined(true);
    }
  };

  var handleButtonRef = useForkRef(ref, handleButtonRefChange);
  var handleListboxRef = useForkRef(listboxRef, (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref);
  React.useEffect(function () {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  var handleOpenChange = function handleOpenChange(isOpen) {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };

  var _useSelect = useSelect({
    buttonComponent: Button,
    buttonRef: handleButtonRef,
    defaultValue: defaultValue,
    disabled: disabledProp,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id,
    listboxRef: handleListboxRef,
    multiple: true,
    onChange: onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options: options,
    value: valueProp
  }),
      buttonActive = _useSelect.buttonActive,
      buttonFocusVisible = _useSelect.buttonFocusVisible,
      disabled = _useSelect.disabled,
      getButtonProps = _useSelect.getButtonProps,
      getListboxProps = _useSelect.getListboxProps,
      getOptionProps = _useSelect.getOptionProps,
      getOptionState = _useSelect.getOptionState,
      value = _useSelect.value;

  var ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen: defaultListboxOpen,
    disabled: disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue: renderValue,
    value: value
  });

  var classes = useUtilityClasses(ownerState);
  var selectedOptions = React.useMemo(function () {
    if (value == null) {
      return [];
    }

    return options.filter(function (o) {
      return value.includes(o.value);
    });
  }, [options, value]);
  var buttonProps = appendOwnerState(Button, _extends({}, getButtonProps(), other, componentsProps.root, {
    className: clsx(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  var listboxProps = appendOwnerState(ListboxRoot, _extends({}, getListboxProps(), componentsProps.listbox, {
    className: clsx((_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className, classes.listbox)
  }), ownerState); // Popper must be a (non-host) component, therefore ownerState will be present within the props

  var popperProps = appendOwnerState(Popper, _extends({
    open: listboxOpen,
    anchorEl: buttonRef.current,
    placement: 'bottom-start',
    disablePortal: true,
    role: undefined
  }, componentsProps.popper, {
    className: clsx((_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className, classes.popper)
  }), ownerState);
  var context = {
    getOptionProps: getOptionProps,
    getOptionState: getOptionState,
    listboxRef: listboxRef
  };
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonProps, {
      children: renderValue(selectedOptions)
    })), buttonDefined && /*#__PURE__*/_jsx(Popper, _extends({}, popperProps, {
      children: /*#__PURE__*/_jsx(ListboxRoot, _extends({}, listboxProps, {
        children: /*#__PURE__*/_jsx(SelectUnstyledContext.Provider, {
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
  autoFocus: PropTypes.bool,

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @ignore
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes
  /* @typescript-to-proptypes-ignore */
  .shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    listbox: PropTypes.object,
    popper: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: PropTypes.bool,

  /**
   * The default selected values. Use when the component is not controlled.
   * @default []
   */
  defaultValue: PropTypes.array,

  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: PropTypes.bool,

  /**
   * Callback fired when an option is selected.
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: PropTypes.func,

  /**
   * Function that customizes the rendering of the selected values.
   */
  renderValue: PropTypes.func,

  /**
   * The selected values.
   * Set to an empty array to deselect all options.
   */
  value: PropTypes.array
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

export default MultiSelectUnstyled;