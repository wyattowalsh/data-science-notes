import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "value", "components", "componentsProps", "component"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { appendOwnerState } from '../utils';
import composeClasses from '../composeClasses';
import { getTabPanelUnstyledUtilityClass } from './tabPanelUnstyledClasses';
import useTabPanel from './useTabPanel';
import { jsx as _jsx } from "react/jsx-runtime";

const useUtilityClasses = ownerState => {
  const {
    hidden
  } = ownerState;
  const slots = {
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


const TabPanelUnstyled = /*#__PURE__*/React.forwardRef(function TabPanelUnstyled(props, ref) {
  const {
    children,
    className,
    components = {},
    componentsProps = {},
    component
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    hidden,
    getRootProps
  } = useTabPanel(props);

  const ownerState = _extends({}, props, {
    hidden
  });

  const classes = useUtilityClasses(ownerState);
  const TabPanelRoot = component ?? components.Root ?? 'div';
  const tabPanelRootProps = appendOwnerState(TabPanelRoot, _extends({}, other, componentsProps.root), ownerState);
  return /*#__PURE__*/_jsx(TabPanelRoot, _extends({}, getRootProps(), {
    ref: ref,
    role: "tabpanel"
  }, tabPanelRootProps, {
    className: clsx(classes.root, componentsProps.root?.className, className),
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