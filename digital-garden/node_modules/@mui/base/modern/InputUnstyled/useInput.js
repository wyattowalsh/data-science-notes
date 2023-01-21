import _extends from "@babel/runtime/helpers/esm/extends";
import { formatMuiErrorMessage as _formatMuiErrorMessage } from "@mui/utils";
import * as React from 'react';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import useFormControl from '../FormControlUnstyled/useFormControl';
import extractEventHandlers from '../utils/extractEventHandlers';
export default function useInput(props, inputRef) {
  const {
    defaultValue,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp
  } = props;
  const formControlContext = useFormControl();
  let value;
  let required;
  let disabled;
  let error;

  if (formControlContext) {
    value = formControlContext.value;
    disabled = formControlContext.disabled ?? false;
    required = formControlContext.required ?? false;
    error = formControlContext.error ?? false;
  } else {
    value = valueProp;
    disabled = disabledProp;
    required = requiredProp;
    error = errorProp;
  }

  const {
    current: isControlled
  } = React.useRef(value != null);
  const handleInputRefWarning = React.useCallback(instance => {
    if (process.env.NODE_ENV !== 'production') {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['MUI: You have provided a `components.Input` to the input component', 'that does not correctly handle the `ref` prop.', 'Make sure the `ref` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  const internalInputRef = React.useRef(null);
  const handleIncomingRef = useForkRef(inputRef, handleInputRefWarning);
  const handleInputRef = useForkRef(internalInputRef, handleIncomingRef);
  const [focused, setFocused] = React.useState(false); // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  React.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false); // @ts-ignore

      onBlur?.();
    }
  }, [formControlContext, disabled, focused, onBlur]);

  const handleFocus = otherHandlers => event => {
    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (formControlContext?.disabled) {
      event.stopPropagation();
      return;
    }

    otherHandlers.onFocus?.(event);

    if (formControlContext && formControlContext.onFocus) {
      formControlContext?.onFocus?.();
    } else {
      setFocused(true);
    }
  };

  const handleBlur = otherHandlers => event => {
    otherHandlers.onBlur?.(event);

    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };

  const handleChange = otherHandlers => (event, ...args) => {
    if (!isControlled) {
      const element = event.target || internalInputRef.current;

      if (element == null) {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Expected valid input target. Did you use a custom \`components.Input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : _formatMuiErrorMessage(17));
      }
    }

    formControlContext?.onChange?.(event); // @ts-ignore

    otherHandlers.onChange?.(event, ...args);
  };

  const handleClick = otherHandlers => event => {
    if (internalInputRef.current && event.currentTarget === event.target) {
      internalInputRef.current.focus();
    }

    otherHandlers.onClick?.(event);
  };

  const getRootProps = externalProps => {
    // onBlur, onChange and onFocus are forwarded to the input slot.
    const propsEventHandlers = extractEventHandlers(props, ['onBlur', 'onChange', 'onFocus']);

    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));

    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };

  const getInputProps = externalProps => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };

    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));

    const mergedEventHandlers = _extends({}, externalProps, externalEventHandlers, {
      onBlur: handleBlur(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });

    return _extends({}, mergedEventHandlers, {
      'aria-invalid': error || undefined,
      defaultValue: defaultValue,
      ref: handleInputRef,
      value: value,
      required,
      disabled
    });
  };

  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    required,
    value
  };
}