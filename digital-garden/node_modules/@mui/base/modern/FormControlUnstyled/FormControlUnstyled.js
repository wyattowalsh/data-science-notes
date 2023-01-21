import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["defaultValue", "children", "className", "component", "components", "componentsProps", "disabled", "error", "focused", "onChange", "required", "value"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_useControlled as useControlled } from '@mui/utils';
import FormControlUnstyledContext from './FormControlContext';
import appendOwnerState from '../utils/appendOwnerState';
import classes from './formControlUnstyledClasses';
import { jsx as _jsx } from "react/jsx-runtime";

function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== '';
}

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * *   FormLabel
 * *   FormHelperText
 * *   Input
 * *   InputLabel
 *
 * You can find one composition example below and more going to [the demos](https://mui.com/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `Input` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 *
 * Demos:
 *
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [FormControlUnstyled API](https://mui.com/api/form-control-unstyled/)
 */
const FormControlUnstyled = /*#__PURE__*/React.forwardRef(function FormControlUnstyled(props, ref) {
  const {
    defaultValue,
    children,
    className,
    component,
    components = {},
    componentsProps = {},
    disabled = false,
    error = false,
    focused: visuallyFocused,
    onChange,
    required = false,
    value: incomingValue
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: 'FormControl',
    state: 'value'
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React.useState(false);

  if (disabled && focusedState) {
    setFocused(false);
  }

  const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;

  const ownerState = _extends({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });

  let registerEffect = () => {};

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const registeredInput = React.useRef(false);

    registerEffect = () => {
      if (registeredInput.current) {
        console.error(['MUI: There are multiple `Input` components inside a FormControl.', 'This creates visual inconsistencies, only use one `Input`.'].join('\n'));
      }

      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }

  const handleChange = event => {
    setValue(event.target.value);
    onChange?.(event);
  };

  const childContext = {
    disabled,
    error,
    filled,
    focused,
    onBlur: () => {
      setFocused(false);
    },
    onChange: handleChange,
    onFocus: () => {
      setFocused(true);
    },
    registerEffect,
    required,
    value: value ?? ''
  };
  const Root = component ?? components.Root ?? 'div';
  const rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  return /*#__PURE__*/_jsx(FormControlUnstyledContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/_jsx(Root, _extends({
      ref: ref
    }, rootProps, {
      className: clsx(classes.root, className, rootProps?.className, disabled && classes.disabled),
      children: children
    }))
  });
});
process.env.NODE_ENV !== "production" ? FormControlUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
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
   * The components used for each slot inside the FormControl.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),

  /**
   * @ignore
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),

  /**
   * @ignore
   */
  defaultValue: PropTypes.any,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes.bool,

  /**
   * If `true`, the component is displayed in focused state.
   * @default false
   */
  focused: PropTypes.bool,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: PropTypes.bool,

  /**
   * @ignore
   */
  value: PropTypes.any
} : void 0;
export default FormControlUnstyled;