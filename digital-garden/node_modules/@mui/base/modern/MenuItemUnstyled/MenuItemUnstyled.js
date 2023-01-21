import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "disabled", "component", "components", "componentsProps"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { appendOwnerState } from '../utils';
import { getMenuItemUnstyledUtilityClass } from './menuItemUnstyledClasses';
import useMenuItem from './useMenuItem';
import composeClasses from '../composeClasses';
import { jsx as _jsx } from "react/jsx-runtime";

function getUtilityClasses(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
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


const MenuItemUnstyled = /*#__PURE__*/React.forwardRef(function MenuItemUnstyled(props, ref) {
  const {
    children,
    className,
    disabled = false,
    component,
    components = {},
    componentsProps = {}
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const Root = component ?? components.Root ?? 'li';
  const {
    getRootProps,
    itemState,
    focusVisible
  } = useMenuItem({
    component: Root,
    disabled,
    ref
  });

  if (itemState == null) {
    return null;
  }

  const ownerState = _extends({}, props, itemState, {
    focusVisible
  });

  const classes = getUtilityClasses(ownerState);
  const rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root, getRootProps(other), {
    className: clsx(classes.root, className, componentsProps.root?.className)
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