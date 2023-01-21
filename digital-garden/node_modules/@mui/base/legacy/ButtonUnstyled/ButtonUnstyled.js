import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import composeClasses from '../composeClasses';
import { getButtonUnstyledUtilityClass } from './buttonUnstyledClasses';
import useButton from './useButton';
import appendOwnerState from '../utils/appendOwnerState';
import { jsx as _jsx } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var active = ownerState.active,
      disabled = ownerState.disabled,
      focusVisible = ownerState.focusVisible;
  var slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active']
  };
  return composeClasses(slots, getButtonUnstyledUtilityClass, {});
};
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Button](https://mui.com/base/react-button/)
 *
 * API:
 *
 * - [ButtonUnstyled API](https://mui.com/base/api/button-unstyled/)
 */


var ButtonUnstyled = /*#__PURE__*/React.forwardRef(function ButtonUnstyled(props, forwardedRef) {
  var _ref, _componentsProps$root;

  var className = props.className,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      children = props.children,
      disabled = props.disabled,
      action = props.action,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseLeave = props.onMouseLeave,
      other = _objectWithoutProperties(props, ["className", "component", "components", "componentsProps", "children", "disabled", "action", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseLeave"]);

  var buttonRef = React.useRef();
  var handleRef = useForkRef(buttonRef, forwardedRef);
  var ButtonRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'button';

  var _useButton = useButton(_extends({}, props, {
    component: ButtonRoot,
    ref: handleRef
  })),
      active = _useButton.active,
      focusVisible = _useButton.focusVisible,
      setFocusVisible = _useButton.setFocusVisible,
      getRootProps = _useButton.getRootProps;

  React.useImperativeHandle(action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, [setFocusVisible]);

  var ownerState = _extends({}, props, {
    active: active,
    focusVisible: focusVisible
  });

  var classes = useUtilityClasses(ownerState);
  var buttonRootProps = appendOwnerState(ButtonRoot, _extends({}, getRootProps(), other, componentsProps.root, {
    className: clsx(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return /*#__PURE__*/_jsx(ButtonRoot, _extends({}, buttonRootProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? ButtonUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      focusVisible: PropTypes.func.isRequired
    })
  })]),

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
   * @default 'button'
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Button.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Button.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   */
  onFocusVisible: PropTypes.func
} : void 0;
export default ButtonUnstyled;