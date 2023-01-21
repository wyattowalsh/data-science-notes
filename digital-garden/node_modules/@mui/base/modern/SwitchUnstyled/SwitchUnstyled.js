import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["checked", "className", "component", "components", "componentsProps", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useSwitch from './useSwitch';
import classes from './switchUnstyledClasses';
import appendOwnerState from '../utils/appendOwnerState';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

/**
 * The foundation for building custom-styled switches.
 *
 * Demos:
 *
 * - [Switches](https://mui.com/components/switches/)
 *
 * API:
 *
 * - [SwitchUnstyled API](https://mui.com/api/switch-unstyled/)
 */
const SwitchUnstyled = /*#__PURE__*/React.forwardRef(function SwitchUnstyled(props, ref) {
  const {
    checked: checkedProp,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, _excluded);

  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(useSwitchProps);

  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });

  const Root = component ?? components.Root ?? 'span';
  const rootProps = appendOwnerState(Root, _extends({}, otherProps, componentsProps.root), ownerState);
  const Thumb = components.Thumb ?? 'span';
  const thumbProps = appendOwnerState(Thumb, componentsProps.thumb ?? {}, ownerState);
  const Input = components.Input ?? 'input';
  const inputProps = appendOwnerState(Input, componentsProps.input ?? {}, ownerState);
  const Track = components.Track === null ? () => null : components.Track ?? 'span';
  const trackProps = appendOwnerState(Track, componentsProps.track ?? {}, ownerState);
  const stateClasses = clsx(checked && classes.checked, disabled && classes.disabled, focusVisible && classes.focusVisible, readOnly && classes.readOnly);
  return /*#__PURE__*/_jsxs(Root, _extends({
    ref: ref
  }, rootProps, {
    className: clsx(classes.root, stateClasses, className, rootProps?.className),
    children: [/*#__PURE__*/_jsx(Track, _extends({}, trackProps, {
      className: clsx(classes.track, trackProps?.className)
    })), /*#__PURE__*/_jsx(Thumb, _extends({}, thumbProps, {
      className: clsx(classes.thumb, thumbProps?.className)
    })), /*#__PURE__*/_jsx(Input, _extends({}, getInputProps(inputProps), {
      className: clsx(classes.input, inputProps?.className)
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? SwitchUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,

  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   * This is equivalent to `components.Root`. If both are provided, the `component` is used.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Switch.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes
  /* @typescript-to-proptypes-ignore */
  .shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType,
    Thumb: PropTypes.elementType,
    Track: PropTypes.oneOfType([PropTypes.elementType, PropTypes.oneOf([null])])
  }),

  /**
   * The props used for each slot inside the Switch.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object,
    thumb: PropTypes.object,
    track: PropTypes.object
  }),

  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: PropTypes.bool,

  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * @ignore
   */
  onFocusVisible: PropTypes.func,

  /**
   * If `true`, the component is read only.
   */
  readOnly: PropTypes.bool,

  /**
   * If `true`, the `input` element is required.
   */
  required: PropTypes.bool
} : void 0;
export default SwitchUnstyled;