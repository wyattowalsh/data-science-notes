import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { unstable_setRef as setRef, unstable_useForkRef as useForkRef, unstable_useIsFocusVisible as useIsFocusVisible } from '@mui/utils';
import extractEventHandlers from '../utils/extractEventHandlers';
export default function useButton(parameters) {
  var _parameters$component = parameters.component,
      component = _parameters$component === void 0 ? 'button' : _parameters$component,
      _parameters$disabled = parameters.disabled,
      disabled = _parameters$disabled === void 0 ? false : _parameters$disabled,
      href = parameters.href,
      ref = parameters.ref,
      _parameters$tabIndex = parameters.tabIndex,
      tabIndex = _parameters$tabIndex === void 0 ? 0 : _parameters$tabIndex,
      to = parameters.to,
      type = parameters.type;
  var buttonRef = React.useRef();

  var _React$useState = React.useState(false),
      active = _React$useState[0],
      setActive = _React$useState[1];

  var _useIsFocusVisible = useIsFocusVisible(),
      isFocusVisibleRef = _useIsFocusVisible.isFocusVisibleRef,
      handleFocusVisible = _useIsFocusVisible.onFocus,
      handleBlurVisible = _useIsFocusVisible.onBlur,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState2 = React.useState(false),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  React.useEffect(function () {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);

  var createHandleMouseLeave = function createHandleMouseLeave(otherHandlers) {
    return function (event) {
      var _otherHandlers$onMous;

      if (focusVisible) {
        event.preventDefault();
      }

      (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    };
  };

  var createHandleBlur = function createHandleBlur(otherHandlers) {
    return function (event) {
      var _otherHandlers$onBlur;

      handleBlurVisible(event);

      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }

      (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    };
  };

  var createHandleFocus = function createHandleFocus(otherHandlers) {
    return function (event) {
      var _otherHandlers$onFocu2;

      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      handleFocusVisible(event);

      if (isFocusVisibleRef.current === true) {
        var _otherHandlers$onFocu;

        setFocusVisible(true);
        (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
      }

      (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu2.call(otherHandlers, event);
    };
  };

  var isNonNativeButton = function isNonNativeButton() {
    var button = buttonRef.current;
    return component !== 'button' && !((button == null ? void 0 : button.tagName) === 'A' && button != null && button.href);
  };

  var createHandleClick = function createHandleClick(otherHandlers) {
    return function (event) {
      if (!disabled) {
        var _otherHandlers$onClic;

        (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
      }
    };
  };

  var createHandleMouseDown = function createHandleMouseDown(otherHandlers) {
    return function (event) {
      var _otherHandlers$onMous2;

      if (event.target === event.currentTarget && !disabled) {
        setActive(true);
      }

      (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    };
  };

  var createHandleMouseUp = function createHandleMouseUp(otherHandlers) {
    return function (event) {
      var _otherHandlers$onMous3;

      if (event.target === event.currentTarget) {
        setActive(false);
      }

      (_otherHandlers$onMous3 = otherHandlers.onMouseUp) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    };
  };

  var createHandleKeyDown = function createHandleKeyDown(otherHandlers) {
    return function (event) {
      var _otherHandlers$onKeyD;

      (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);

      if (event.defaultPrevented) {
        return;
      }

      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
        event.preventDefault();
      }

      if (event.target === event.currentTarget && event.key === ' ' && !disabled) {
        setActive(true);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
        var _otherHandlers$onClic2;

        (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);
        event.preventDefault();
      }
    };
  };

  var createHandleKeyUp = function createHandleKeyUp(otherHandlers) {
    return function (event) {
      var _otherHandlers$onKeyU;

      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (event.target === event.currentTarget) {
        setActive(false);
      }

      (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event); // Keyboard accessibility for non interactive elements

      if (event.target === event.currentTarget && isNonNativeButton() && !disabled && event.key === ' ' && !event.defaultPrevented) {
        var _otherHandlers$onClic3;

        (_otherHandlers$onClic3 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic3.call(otherHandlers, event);
      }
    };
  };

  var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  var handleRef = useForkRef(ref, handleOwnRef);

  var _React$useState3 = React.useState(''),
      hostElementName = _React$useState3[0],
      setHostElementName = _React$useState3[1];

  var updateRef = function updateRef(instance) {
    var _instance$tagName;

    setHostElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : '');
    setRef(handleRef, instance);
  };

  var buttonProps = {};

  if (hostElementName === 'BUTTON') {
    buttonProps.type = type != null ? type : 'button';
    buttonProps.disabled = disabled;
  } else if (hostElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  var getRootProps = function getRootProps() {
    var otherHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var propsEventHandlers = extractEventHandlers(parameters);

    var externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers); // onFocusVisible can be present on the props, but since it's not a valid React event handler,
    // it must not be forwarded to the inner component.


    delete externalEventHandlers.onFocusVisible;
    return _extends({
      tabIndex: disabled ? -1 : tabIndex,
      type: type
    }, externalEventHandlers, buttonProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      onMouseUp: createHandleMouseUp(externalEventHandlers),
      ref: updateRef
    });
  };

  return {
    getRootProps: getRootProps,
    focusVisible: focusVisible,
    setFocusVisible: setFocusVisible,
    disabled: disabled,
    active: active
  };
}