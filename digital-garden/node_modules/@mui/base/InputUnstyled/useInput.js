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
    var _formControlContext$d, _formControlContext$r, _formControlContext$e;

    value = formControlContext.value;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
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

      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);

  const handleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;

    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }

    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);

    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;

      formControlContext == null ? void 0 : (_formControlContext$o = formControlContext.onFocus) == null ? void 0 : _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;

    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);

    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };

  const handleChange = otherHandlers => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;

    if (!isControlled) {
      const element = event.target || internalInputRef.current;

      if (element == null) {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Expected valid input target. Did you use a custom \`components.Input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : _formatMuiErrorMessage(17));
      }
    }

    formControlContext == null ? void 0 : (_formControlContext$o2 = formControlContext.onChange) == null ? void 0 : _formControlContext$o2.call(formControlContext, event); // @ts-ignore

    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };

  const handleClick = otherHandlers => event => {
    var _otherHandlers$onClic;

    if (internalInputRef.current && event.currentTarget === event.target) {
      internalInputRef.current.focus();
    }

    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
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