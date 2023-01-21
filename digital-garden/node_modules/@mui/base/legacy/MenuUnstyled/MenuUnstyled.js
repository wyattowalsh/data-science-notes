import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HTMLElementType, refType } from '@mui/utils';
import appendOwnerState from '../utils/appendOwnerState';
import MenuUnstyledContext from './MenuUnstyledContext';
import { getMenuUnstyledUtilityClass } from './menuUnstyledClasses';
import useMenu from './useMenu';
import composeClasses from '../composeClasses';
import PopperUnstyled from '../PopperUnstyled';
import { jsx as _jsx } from "react/jsx-runtime";

function getUtilityClasses(ownerState) {
  var open = ownerState.open;
  var slots = {
    root: ['root', open && 'expanded'],
    listbox: ['listbox', open && 'expanded']
  };
  return composeClasses(slots, getMenuUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuUnstyled API](https://mui.com/base/api/menu-unstyled/)
 */


var MenuUnstyled = /*#__PURE__*/React.forwardRef(function MenuUnstyled(props, forwardedRef) {
  var _componentsProps$list, _componentsProps$list2, _ref, _componentsProps$root, _components$Listbox, _componentsProps$list3;

  var actions = props.actions,
      anchorEl = props.anchorEl,
      children = props.children,
      className = props.className,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      onClose = props.onClose,
      _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      other = _objectWithoutProperties(props, ["actions", "anchorEl", "children", "className", "component", "components", "componentsProps", "onClose", "open"]);

  var _useMenu = useMenu({
    open: open,
    onClose: onClose,
    listboxRef: (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id
  }),
      registerItem = _useMenu.registerItem,
      unregisterItem = _useMenu.unregisterItem,
      getListboxProps = _useMenu.getListboxProps,
      getItemProps = _useMenu.getItemProps,
      getItemState = _useMenu.getItemState,
      highlightFirstItem = _useMenu.highlightFirstItem,
      highlightLastItem = _useMenu.highlightLastItem;

  React.useImperativeHandle(actions, function () {
    return {
      highlightFirstItem: highlightFirstItem,
      highlightLastItem: highlightLastItem
    };
  }, [highlightFirstItem, highlightLastItem]);

  var ownerState = _extends({}, props, {
    open: open
  });

  var classes = getUtilityClasses(ownerState);
  var Popper = (_ref = component != null ? component : components.Root) != null ? _ref : PopperUnstyled;
  var popperProps = appendOwnerState(Popper, _extends({}, other, {
    anchorEl: anchorEl,
    open: open,
    keepMounted: true,
    role: undefined
  }, componentsProps.root, {
    className: clsx(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  var Listbox = (_components$Listbox = components.Listbox) != null ? _components$Listbox : 'ul';
  var listboxProps = appendOwnerState(Listbox, _extends({}, componentsProps.listbox, getListboxProps(), {
    className: clsx(classes.listbox, (_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className)
  }), ownerState);
  var contextValue = {
    registerItem: registerItem,
    unregisterItem: unregisterItem,
    getItemState: getItemState,
    getItemProps: getItemProps,
    open: open
  };
  return /*#__PURE__*/_jsx(Popper, _extends({}, popperProps, {
    ref: forwardedRef,
    children: /*#__PURE__*/_jsx(Listbox, _extends({}, listboxProps, {
      children: /*#__PURE__*/_jsx(MenuUnstyledContext.Provider, {
        value: contextValue,
        children: children
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" ? MenuUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: refType,

  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   */
  anchorEl: PropTypes
  /* @typescript-to-proptypes-ignore */
  .oneOfType([HTMLElementType, PropTypes.object, PropTypes.func]),

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
    Listbox: PropTypes.elementType,
    Root: PropTypes.elementType
  }),

  /**
   * @ignore
   */
  componentsProps: PropTypes.shape({
    listbox: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: PropTypes.func,

  /**
   * Controls whether the menu is displayed.
   * @default false
   */
  open: PropTypes.bool
} : void 0;
export default MenuUnstyled;