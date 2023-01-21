"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useInput;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("@mui/utils");

var React = _interopRequireWildcard(require("react"));

var _useFormControl = _interopRequireDefault(require("../FormControlUnstyled/useFormControl"));

var _extractEventHandlers = _interopRequireDefault(require("../utils/extractEventHandlers"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useInput(props, inputRef) {
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
  const formControlContext = (0, _useFormControl.default)();
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
  const handleIncomingRef = (0, _utils.unstable_useForkRef)(inputRef, handleInputRefWarning);
  const handleInputRef = (0, _utils.unstable_useForkRef)(internalInputRef, handleIncomingRef);
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
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Expected valid input target. Did you use a custom \`components.Input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : (0, _utils.formatMuiErrorMessage)(17));
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
    const propsEventHandlers = (0, _extractEventHandlers.default)(props, ['onBlur', 'onChange', 'onFocus']);
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, (0, _extractEventHandlers.default)(externalProps));
    return (0, _extends2.default)({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };

  const getInputProps = externalProps => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, (0, _extractEventHandlers.default)(externalProps));
    const mergedEventHandlers = (0, _extends2.default)({}, externalProps, externalEventHandlers, {
      onBlur: handleBlur(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return (0, _extends2.default)({}, mergedEventHandlers, {
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