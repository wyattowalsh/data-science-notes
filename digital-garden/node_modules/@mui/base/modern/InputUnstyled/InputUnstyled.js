import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "component", "components", "componentsProps", "defaultValue", "disabled", "endAdornment", "error", "id", "maxRows", "minRows", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "rows", "type", "startAdornment", "value"];
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import appendOwnerState from '../utils/appendOwnerState';
import isHostComponent from '../utils/isHostComponent';
import classes from './inputUnstyledClasses';
import useInput from './useInput';
/**
 *
 * Demos:
 *
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [InputUnstyled API](https://mui.com/api/input-unstyled/)
 */

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const InputUnstyled = /*#__PURE__*/React.forwardRef(function InputUnstyled(props, ref) {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    maxRows,
    minRows,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    rows,
    type = 'text',
    startAdornment,
    value
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = useInput({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  }, componentsProps.input?.ref);

  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });

  const rootStateClasses = clsx(disabledState && classes.disabled, errorState && classes.error, focused && classes.focused, Boolean(formControlContext) && classes.formControl, multiline && classes.multiline, Boolean(startAdornment) && classes.adornedStart, Boolean(endAdornment) && classes.adornedEnd);
  const inputStateClasses = clsx(disabledState && classes.disabled, multiline && classes.multiline);
  const propsToForward = {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = component ?? components.Root ?? 'div';
  const rootProps = appendOwnerState(Root, _extends({}, getRootProps(_extends({}, other, componentsProps.root)), {
    className: clsx(classes.root, rootStateClasses, className, componentsProps.root?.className)
  }), ownerState);
  let Input = components.Input ?? 'input'; // TODO: type this properly

  let inputProps = appendOwnerState(Input, _extends({}, getInputProps(_extends({}, componentsProps.input, propsToForward)), {
    className: clsx(classes.input, inputStateClasses, componentsProps.input?.className)
  }), ownerState);

  if (multiline) {
    const hasHostTexarea = isHostComponent(components.Textarea ?? 'textarea');

    if (rows) {
      if (process.env.NODE_ENV !== 'production') {
        if (minRows || maxRows) {
          console.warn('MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.');
        }
      }

      inputProps = _extends({
        type: undefined,
        minRows: hasHostTexarea ? undefined : rows,
        maxRows: hasHostTexarea ? undefined : rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: undefined,
        maxRows: hasHostTexarea ? undefined : maxRows,
        minRows: hasHostTexarea ? undefined : minRows
      }, inputProps);
    }

    Input = components.Textarea ?? 'textarea';
  }

  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    ref: ref,
    children: [startAdornment, /*#__PURE__*/_jsx(Input, _extends({}, inputProps)), endAdornment]
  }));
});
process.env.NODE_ENV !== "production" ? InputUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': PropTypes.string,

  /**
   * @ignore
   */
  'aria-label': PropTypes.string,

  /**
   * @ignore
   */
  'aria-labelledby': PropTypes.string,

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,

  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType,
    Textarea: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,

  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes.bool,

  /**
   * Trailing adornment for this input.
   */
  endAdornment: PropTypes.node,

  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes.bool,

  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes.number,

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes.number,

  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: PropTypes.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onClick: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,

  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,

  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,

  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.number,

  /**
   * Leading adornment for this input.
   */
  startAdornment: PropTypes.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any
} : void 0;
export default InputUnstyled;