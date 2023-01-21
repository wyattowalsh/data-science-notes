import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_capitalize as capitalize } from '@mui/utils';
import composeClasses from '../composeClasses';
import appendOwnerState from '../utils/appendOwnerState';
import useBadge from './useBadge';
import { getBadgeUtilityClass } from './badgeUnstyledClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var variant = ownerState.variant,
      anchorOrigin = ownerState.anchorOrigin,
      invisible = ownerState.invisible,
      classes = ownerState.classes;
  var slots = {
    root: ['root'],
    badge: ['badge', variant, "anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal)), invisible && 'invisible']
  };
  return composeClasses(slots, getBadgeUtilityClass, classes);
};

var BadgeUnstyled = /*#__PURE__*/React.forwardRef(function BadgeUnstyled(props, ref) {
  var _props$anchorOrigin = props.anchorOrigin,
      anchorOriginProp = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'right'
  } : _props$anchorOrigin,
      classesProp = props.classes,
      badgeContentProp = props.badgeContent,
      component = props.component,
      children = props.children,
      className = props.className,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      invisibleProp = props.invisible,
      _props$max = props.max,
      maxProp = _props$max === void 0 ? 99 : _props$max,
      _props$showZero = props.showZero,
      showZero = _props$showZero === void 0 ? false : _props$showZero,
      _props$variant = props.variant,
      variantProp = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["anchorOrigin", "classes", "badgeContent", "component", "children", "className", "components", "componentsProps", "invisible", "max", "showZero", "variant"]);

  var _useBadge = useBadge(_extends({}, props, {
    anchorOrigin: anchorOriginProp,
    max: maxProp,
    variant: variantProp
  })),
      anchorOrigin = _useBadge.anchorOrigin,
      badgeContent = _useBadge.badgeContent,
      max = _useBadge.max,
      variant = _useBadge.variant,
      displayValue = _useBadge.displayValue,
      invisible = _useBadge.invisible;

  var ownerState = _extends({}, props, {
    anchorOrigin: anchorOrigin,
    badgeContent: badgeContent,
    classes: classesProp,
    invisible: invisible,
    max: max,
    variant: variant,
    showZero: showZero
  });

  var classes = useUtilityClasses(ownerState);
  var Root = component || components.Root || 'span';
  var rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  var Badge = components.Badge || 'span';
  var badgeProps = appendOwnerState(Badge, componentsProps.badge, ownerState);
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    ref: ref
  }, other, {
    className: clsx(classes.root, rootProps.className, className),
    children: [children, /*#__PURE__*/_jsx(Badge, _extends({}, badgeProps, {
      className: clsx(classes.badge, badgeProps.className),
      children: displayValue
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? BadgeUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'right']).isRequired,
    vertical: PropTypes.oneOf(['bottom', 'top']).isRequired
  }),

  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,

  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

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
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Badge: PropTypes.elementType,
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    badge: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: PropTypes.bool,

  /**
   * Max count to show.
   * @default 99
   */
  max: PropTypes.number,

  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: PropTypes.bool,

  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: PropTypes.string
} : void 0;
export default BadgeUnstyled;