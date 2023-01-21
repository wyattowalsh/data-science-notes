import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import composeClasses from '../composeClasses';
import { SelectUnstyledContext } from '../SelectUnstyled/SelectUnstyledContext';
import { getOptionUnstyledUtilityClass } from './optionUnstyledClasses';
import appendOwnerState from '../utils/appendOwnerState';
import { jsx as _jsx } from "react/jsx-runtime";

function useUtilityClasses(ownerState) {
  var disabled = ownerState.disabled,
      highlighted = ownerState.highlighted,
      selected = ownerState.selected;
  var slots = {
    root: ['root', disabled && 'disabled', highlighted && 'highlighted', selected && 'selected']
  };
  return composeClasses(slots, getOptionUnstyledUtilityClass, {});
}
/**
 * An unstyled option to be used within a SelectUnstyled.
 */


var OptionUnstyled = /*#__PURE__*/React.forwardRef(function OptionUnstyled(props, ref) {
  var _componentsProps$root;

  var children = props.children,
      className = props.className,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      disabled = props.disabled,
      value = props.value,
      other = _objectWithoutProperties(props, ["children", "className", "component", "components", "componentsProps", "disabled", "value"]);

  var selectContext = React.useContext(SelectUnstyledContext);

  if (!selectContext) {
    throw new Error('OptionUnstyled must be used within a SelectUnstyled');
  }

  var Root = component || components.Root || 'li';
  var selectOption = {
    value: value,
    label: children,
    disabled: disabled
  };
  var optionState = selectContext.getOptionState(selectOption);
  var optionProps = selectContext.getOptionProps(selectOption);
  var listboxRef = selectContext.listboxRef;

  var ownerState = _extends({}, props, optionState);

  var optionRef = React.useRef(null);
  var handleRef = useForkRef(ref, optionRef);
  React.useEffect(function () {
    // Scroll to the currently highlighted option
    if (optionState.highlighted) {
      if (!listboxRef.current || !optionRef.current) {
        return;
      }

      var listboxClientRect = listboxRef.current.getBoundingClientRect();
      var optionClientRect = optionRef.current.getBoundingClientRect();

      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [optionState.highlighted, listboxRef]);
  var classes = useUtilityClasses(ownerState);
  var rootProps = appendOwnerState(Root, _extends({}, other, optionProps, componentsProps.root, {
    ref: handleRef,
    className: clsx(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return /*#__PURE__*/_jsx(Root, _extends({}, rootProps, {
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
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to components.Root.
   * If both are provided, the component is used.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the OptionUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),

  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * The value of the option.
   */
  value: PropTypes.any.isRequired
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

export default /*#__PURE__*/React.memo(OptionUnstyled);