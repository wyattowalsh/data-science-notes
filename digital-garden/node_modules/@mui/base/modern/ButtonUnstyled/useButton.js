import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { unstable_setRef as setRef, unstable_useForkRef as useForkRef, unstable_useIsFocusVisible as useIsFocusVisible } from '@mui/utils';
import extractEventHandlers from '../utils/extractEventHandlers';
export default function useButton(parameters) {
  const {
    component = 'button',
    disabled = false,
    href,
    ref,
    tabIndex = 0,
    to,
    type
  } = parameters;
  const buttonRef = React.useRef();
  const [active, setActive] = React.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);

  const createHandleMouseLeave = otherHandlers => event => {
    if (focusVisible) {
      event.preventDefault();
    }

    otherHandlers.onMouseLeave?.(event);
  };

  const createHandleBlur = otherHandlers => event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    otherHandlers.onBlur?.(event);
  };

  const createHandleFocus = otherHandlers => event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      otherHandlers.onFocusVisible?.(event);
    }

    otherHandlers.onFocus?.(event);
  };

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component !== 'button' && !(button?.tagName === 'A' && button?.href);
  };

  const createHandleClick = otherHandlers => event => {
    if (!disabled) {
      otherHandlers.onClick?.(event);
    }
  };

  const createHandleMouseDown = otherHandlers => event => {
    if (event.target === event.currentTarget && !disabled) {
      setActive(true);
    }

    otherHandlers.onMouseDown?.(event);
  };

  const createHandleMouseUp = otherHandlers => event => {
    if (event.target === event.currentTarget) {
      setActive(false);
    }

    otherHandlers.onMouseUp?.(event);
  };

  const createHandleKeyDown = otherHandlers => event => {
    otherHandlers.onKeyDown?.(event);

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
      otherHandlers.onClick?.(event);
      event.preventDefault();
    }
  };

  const createHandleKeyUp = otherHandlers => event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (event.target === event.currentTarget) {
      setActive(false);
    }

    otherHandlers.onKeyUp?.(event); // Keyboard accessibility for non interactive elements

    if (event.target === event.currentTarget && isNonNativeButton() && !disabled && event.key === ' ' && !event.defaultPrevented) {
      otherHandlers.onClick?.(event);
    }
  };

  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);
  const [hostElementName, setHostElementName] = React.useState('');

  const updateRef = instance => {
    setHostElementName(instance?.tagName ?? '');
    setRef(handleRef, instance);
  };

  const buttonProps = {};

  if (hostElementName === 'BUTTON') {
    buttonProps.type = type ?? 'button';
    buttonProps.disabled = disabled;
  } else if (hostElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);

    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers); // onFocusVisible can be present on the props, but since it's not a valid React event handler,
    // it must not be forwarded to the inner component.


    delete externalEventHandlers.onFocusVisible;
    return _extends({
      tabIndex: disabled ? -1 : tabIndex,
      type
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
    getRootProps,
    focusVisible,
    setFocusVisible,
    disabled,
    active
  };
}