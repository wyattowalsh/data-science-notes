import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { appendOwnerState } from '../utils';
import composeClasses from '../composeClasses';
import { getTabPanelUnstyledUtilityClass } from './tabPanelUnstyledClasses';
import useTabPanel from './useTabPanel';
import { jsx as _jsx } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var hidden = ownerState.hidden;
  var slots = {
    root: ['root', hidden && 'hidden']
  };
  return composeClasses(slots, getTabPanelUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/components/tabs/)
 *
 * API:
 *
 * - [TabPanelUnstyled API](https://mui.com/api/tab-panel-unstyled/)
 */


var TabPanelUnstyled = /*#__PURE__*/React.forwardRef(function TabPanelUnstyled(props, ref) {
  var _ref, _componentsProps$root;

  var children = props.children,
      className = props.className,
      value = props.value,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      component = props.component,
      other = _objectWithoutProperties(props, ["children", "className", "value", "components", "componentsProps", "component"]);

  var _useTabPanel = useTabPanel(props),
      hidden = _useTabPanel.hidden,
      getRootProps = _useTabPanel.getRootProps;

  var ownerState = _extends({}, props, {
    hidden: hidden
  });

  var classes = useUtilityClasses(ownerState);
  var TabPanelRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  var tabPanelRootProps = appendOwnerState(TabPanelRoot, _extends({}, other, componentsProps.root), ownerState);
  return /*#__PURE__*/_jsx(TabPanelRoot, _extends({}, getRootProps(), {
    ref: ref,
    role: "tabpanel"
  }, tabPanelRootProps, {
    className: clsx(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className),
    children: !hidden && children
  }));
});
process.env.NODE_ENV !== "production" ? TabPanelUnstyled.propTypes
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
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the TabPanel.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the TabPanel.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),

  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
} : void 0;
export default TabPanelUnstyled;