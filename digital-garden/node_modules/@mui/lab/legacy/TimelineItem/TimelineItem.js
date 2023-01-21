import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { capitalize, isMuiElement } from '@mui/material/utils';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { timelineContentClasses } from '../TimelineContent';
import { timelineOppositeContentClasses } from '../TimelineOppositeContent';
import TimelineContext from '../Timeline/TimelineContext';
import { getTimelineItemUtilityClass } from './timelineItemClasses';
import { jsx as _jsx } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var position = ownerState.position,
      classes = ownerState.classes,
      hasOppositeContent = ownerState.hasOppositeContent;
  var slots = {
    root: ['root', "position".concat(capitalize(position)), !hasOppositeContent && 'missingOppositeContent']
  };
  return composeClasses(slots, getTimelineItemUtilityClass, classes);
};

var TimelineItemRoot = styled('li', {
  name: 'MuiTimelineItem',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var ownerState = props.ownerState;
    return [styles.root, styles["position".concat(capitalize(ownerState.position))]];
  }
})(function (_ref) {
  var _nthOfTypeEven;

  var ownerState = _ref.ownerState;
  return _extends({
    listStyle: 'none',
    display: 'flex',
    position: 'relative',
    minHeight: 70
  }, ownerState.position === 'left' && {
    flexDirection: 'row-reverse'
  }, ownerState.position === 'alternate' && {
    '&:nth-of-type(even)': (_nthOfTypeEven = {
      flexDirection: 'row-reverse'
    }, _defineProperty(_nthOfTypeEven, "& .".concat(timelineContentClasses.root), {
      textAlign: 'right'
    }), _defineProperty(_nthOfTypeEven, "& .".concat(timelineOppositeContentClasses.root), {
      textAlign: 'left'
    }), _nthOfTypeEven)
  }, !ownerState.hasOppositeContent && {
    '&:before': {
      content: '""',
      flex: 1,
      padding: '6px 16px'
    }
  });
});
var TimelineItem = /*#__PURE__*/React.forwardRef(function TimelineItem(inProps, ref) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiTimelineItem'
  });

  var positionProp = props.position,
      className = props.className,
      other = _objectWithoutProperties(props, ["position", "className"]);

  var _React$useContext = React.useContext(TimelineContext),
      positionContext = _React$useContext.position;

  var hasOppositeContent = false;
  React.Children.forEach(props.children, function (child) {
    if (isMuiElement(child, ['TimelineOppositeContent'])) {
      hasOppositeContent = true;
    }
  });

  var ownerState = _extends({}, props, {
    position: positionProp || positionContext || 'right',
    hasOppositeContent: hasOppositeContent
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(TimelineContext.Provider, {
    value: {
      position: ownerState.position
    },
    children: /*#__PURE__*/_jsx(TimelineItemRoot, _extends({
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref
    }, other))
  });
});
process.env.NODE_ENV !== "production" ? TimelineItem.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
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
   * The position where the timeline's item should appear.
   */
  position: PropTypes.oneOf(['left', 'right']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export default TimelineItem;