import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { appendOwnerState } from '../utils';
import { getMenuItemUnstyledUtilityClass } from './menuItemUnstyledClasses';
import useMenuItem from './useMenuItem';
import composeClasses from '../composeClasses';
import { jsx as _jsx } from "react/jsx-runtime";

function getUtilityClasses(ownerState) {
  var disabled = ownerState.disabled,
      focusVisible = ownerState.focusVisible;
  var slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  return composeClasses(slots, getMenuItemUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuItemUnstyled API](https://mui.com/base/api/menu-item-unstyled/)
 */


var MenuItemUnstyled = /*#__PURE__*/React.forwardRef(function MenuItemUnstyled(props, ref) {
  var _ref, _componentsProps$root;

  var children = props.children,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      other = _objectWithoutProperties(props, ["children", "className", "disabled", "component", "components", "componentsProps"]);

  var Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'li';

  var _useMenuItem = useMenuItem({
    component: Root,
    disabled: disabled,
    ref: ref
  }),
      getRootProps = _useMenuItem.getRootProps,
      itemState = _useMenuItem.itemState,
      focusVisible = _useMenuItem.focusVisible;

  if (itemState == null) {
    return null;
  }

  var ownerState = _extends({}, props, itemState, {
    focusVisible: focusVisible
  });

  var classes = getUtilityClasses(ownerState);
  var rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root, getRootProps(other), {
    className: clsx(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return /*#__PURE__*/_jsx(Root, _extends({}, rootProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? MenuItemUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @ignore
   */
  component: PropTypes.elementType,

  /**
   * @ignore
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
   * If `true`, the menu item will be disabled.
   * @default false
   */
  disabled: PropTypes.bool
} : void 0;
export default MenuItemUnstyled;