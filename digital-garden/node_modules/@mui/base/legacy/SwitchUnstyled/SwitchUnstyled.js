import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
var SwitchUnstyled = /*#__PURE__*/React.forwardRef(function SwitchUnstyled(props, ref) {
  var _ref, _components$Thumb, _componentsProps$thum, _components$Input, _componentsProps$inpu, _components$Track, _componentsProps$trac;

  var checkedProp = props.checked,
      className = props.className,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      readOnlyProp = props.readOnly,
      required = props.required,
      otherProps = _objectWithoutProperties(props, ["checked", "className", "component", "components", "componentsProps", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required"]);

  var useSwitchProps = {
    checked: checkedProp,
    defaultChecked: defaultChecked,
    disabled: disabledProp,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onFocusVisible: onFocusVisible,
    readOnly: readOnlyProp
  };

  var _useSwitch = useSwitch(useSwitchProps),
      getInputProps = _useSwitch.getInputProps,
      checked = _useSwitch.checked,
      disabled = _useSwitch.disabled,
      focusVisible = _useSwitch.focusVisible,
      readOnly = _useSwitch.readOnly;

  var ownerState = _extends({}, props, {
    checked: checked,
    disabled: disabled,
    focusVisible: focusVisible,
    readOnly: readOnly
  });

  var Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'span';
  var rootProps = appendOwnerState(Root, _extends({}, otherProps, componentsProps.root), ownerState);
  var Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  var thumbProps = appendOwnerState(Thumb, (_componentsProps$thum = componentsProps.thumb) != null ? _componentsProps$thum : {}, ownerState);
  var Input = (_components$Input = components.Input) != null ? _components$Input : 'input';
  var inputProps = appendOwnerState(Input, (_componentsProps$inpu = componentsProps.input) != null ? _componentsProps$inpu : {}, ownerState);
  var Track = components.Track === null ? function () {
    return null;
  } : (_components$Track = components.Track) != null ? _components$Track : 'span';
  var trackProps = appendOwnerState(Track, (_componentsProps$trac = componentsProps.track) != null ? _componentsProps$trac : {}, ownerState);
  var stateClasses = clsx(checked && classes.checked, disabled && classes.disabled, focusVisible && classes.focusVisible, readOnly && classes.readOnly);
  return /*#__PURE__*/_jsxs(Root, _extends({
    ref: ref
  }, rootProps, {
    className: clsx(classes.root, stateClasses, className, rootProps == null ? void 0 : rootProps.className),
    children: [/*#__PURE__*/_jsx(Track, _extends({}, trackProps, {
      className: clsx(classes.track, trackProps == null ? void 0 : trackProps.className)
    })), /*#__PURE__*/_jsx(Thumb, _extends({}, thumbProps, {
      className: clsx(classes.thumb, thumbProps == null ? void 0 : thumbProps.className)
    })), /*#__PURE__*/_jsx(Input, _extends({}, getInputProps(inputProps), {
      className: clsx(classes.input, inputProps == null ? void 0 : inputProps.className)
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