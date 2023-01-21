import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import composeClasses from '../composeClasses';
import { appendOwnerState } from '../utils';
import { getTabsListUnstyledUtilityClass } from './tabsListUnstyledClasses';
import useTabsList from './useTabsList';
import { jsx as _jsx } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var orientation = ownerState.orientation;
  var slots = {
    root: ['root', orientation]
  };
  return composeClasses(slots, getTabsListUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/components/tabs/)
 *
 * API:
 *
 * - [TabsListUnstyled API](https://mui.com/api/tabs-list-unstyled/)
 */


var TabsListUnstyled = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _ref, _componentsProps$root;

  var className = props.className,
      children = props.children,
      component = props.component,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      other = _objectWithoutProperties(props, ["className", "children", "component", "components", "componentsProps"]);

  var _useTabsList = useTabsList(_extends({}, props, {
    ref: ref
  })),
      isRtl = _useTabsList.isRtl,
      orientation = _useTabsList.orientation,
      getRootProps = _useTabsList.getRootProps,
      processChildren = _useTabsList.processChildren;

  var ownerState = _extends({}, props, {
    isRtl: isRtl,
    orientation: orientation
  });

  var classes = useUtilityClasses(ownerState);
  var TabsListRoot = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  var tabsListRootProps = appendOwnerState(TabsListRoot, _extends({}, other, componentsProps.root), ownerState);
  var processedChildren = processChildren();
  return /*#__PURE__*/_jsx(TabsListRoot, _extends({}, getRootProps(), tabsListRootProps, {
    className: clsx(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root),
    children: processedChildren
  }));
});
process.env.NODE_ENV !== "production" ? TabsListUnstyled.propTypes
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
   * The components used for each slot inside the TabsList.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the TabsList.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  })
} : void 0;
export default TabsListUnstyled;