import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "value", "defaultValue", "orientation", "direction", "component", "components", "componentsProps", "onChange", "selectionFollowsFocus"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { appendOwnerState } from '../utils';
import composeClasses from '../composeClasses';
import { getTabsUnstyledUtilityClass } from './tabsUnstyledClasses';
import useTabs from './useTabs';
import Context from './TabsContext';
import { jsx as _jsx } from "react/jsx-runtime";

const useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return composeClasses(slots, getTabsUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/components/tabs/)
 *
 * API:
 *
 * - [TabsUnstyled API](https://mui.com/api/tabs-unstyled/)
 */


const TabsUnstyled = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    className,
    orientation = 'horizontal',
    direction = 'ltr',
    component,
    components = {},
    componentsProps = {}
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    tabsContextValue,
    getRootProps
  } = useTabs(props);

  const ownerState = _extends({}, props, {
    orientation,
    direction
  });

  const classes = useUtilityClasses(ownerState);
  const TabsRoot = component ?? components.Root ?? 'div';
  const tabsRootProps = appendOwnerState(TabsRoot, _extends({}, other, componentsProps.root), ownerState);
  return /*#__PURE__*/_jsx(TabsRoot, _extends({}, getRootProps(), tabsRootProps, {
    ref: ref,
    className: clsx(classes.root, componentsProps.root?.className, className),
    children: /*#__PURE__*/_jsx(Context.Provider, {
      value: tabsContextValue,
      children: children
    })
  }));
});
process.env.NODE_ENV !== "production" ? TabsUnstyled.propTypes
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
   * The components used for each slot inside the Tabs.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Tabs.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.number, PropTypes.string]),

  /**
   * The direction of the text.
   * @default 'ltr'
   */
  direction: PropTypes.oneOf(['ltr', 'rtl']),

  /**
   * Callback invoked when new value is being set.
   */
  onChange: PropTypes.func,

  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: PropTypes.bool,

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.number, PropTypes.string])
} : void 0;
export default TabsUnstyled;