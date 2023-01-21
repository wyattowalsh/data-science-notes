import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { alpha, styled } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses, generateUtilityClass, generateUtilityClasses } from '@mui/base';
import { DAY_MARGIN } from '../internal/pickers/constants/dimensions';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import PickersDay, { areDayPropsEqual } from '../PickersDay/PickersDay';
import { jsx as _jsx } from "react/jsx-runtime";
export function getDateRangePickerDayUtilityClass(slot) {
  return generateUtilityClass('MuiDateRangePickerDay', slot);
}
export var dateRangePickerDayClasses = generateUtilityClasses('MuiDateRangePickerDay', ['root', 'rangeIntervalDayHighlight', 'rangeIntervalDayHighlightStart', 'rangeIntervalDayHighlightEnd', 'rangeIntervalPreview', 'rangeIntervalDayPreview', 'rangeIntervalDayPreviewStart', 'rangeIntervalDayPreviewEnd', 'day', 'dayOutsideRangeInterval', 'dayInsideRangeInterval', 'notSelectedDate']);

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var isHighlighting = ownerState.isHighlighting,
      outsideCurrentMonth = ownerState.outsideCurrentMonth,
      isStartOfHighlighting = ownerState.isStartOfHighlighting,
      isStartOfMonth = ownerState.isStartOfMonth,
      isEndOfHighlighting = ownerState.isEndOfHighlighting,
      isEndOfMonth = ownerState.isEndOfMonth,
      isPreviewing = ownerState.isPreviewing,
      isStartOfPreviewing = ownerState.isStartOfPreviewing,
      isEndOfPreviewing = ownerState.isEndOfPreviewing,
      selected = ownerState.selected,
      classes = ownerState.classes;
  var slots = {
    root: ['root', isHighlighting && !outsideCurrentMonth && 'rangeIntervalDayHighlight', (isStartOfHighlighting || isStartOfMonth) && 'rangeIntervalDayHighlightStart', (isEndOfHighlighting || isEndOfMonth) && 'rangeIntervalDayHighlightEnd'],
    rangeIntervalPreview: ['rangeIntervalPreview', isPreviewing && !outsideCurrentMonth && 'rangeIntervalDayPreview', (isStartOfPreviewing || isStartOfMonth) && 'rangeIntervalDayPreviewStart', (isEndOfPreviewing || isEndOfMonth) && 'rangeIntervalDayPreviewEnd'],
    day: ['day', !selected && 'notSelectedDate', !isHighlighting && 'dayOutsideRangeInterval', !selected && isHighlighting && 'dayInsideRangeInterval']
  };
  return composeClasses(slots, getDateRangePickerDayUtilityClass, classes);
};

var endBorderStyle = {
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%'
};
var startBorderStyle = {
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '50%'
};
var DateRangePickerDayRoot = styled('div', {
  name: 'MuiDateRangePickerDay',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})(function (_ref) {
  var _extends2;

  var theme = _ref.theme,
      ownerState = _ref.ownerState;
  return _extends((_extends2 = {}, _defineProperty(_extends2, "&:first-of-type .".concat(dateRangePickerDayClasses.rangeIntervalDayPreview), _extends({}, startBorderStyle, {
    borderLeftColor: theme.palette.divider
  })), _defineProperty(_extends2, "&:last-of-type .".concat(dateRangePickerDayClasses.rangeIntervalDayPreview), _extends({}, endBorderStyle, {
    borderRightColor: theme.palette.divider
  })), _extends2), ownerState.isHighlighting && !ownerState.outsideCurrentMonth && {
    borderRadius: 0,
    color: theme.palette.primary.contrastText,
    backgroundColor: alpha(theme.palette.primary.light, 0.6),
    '&:first-of-type': startBorderStyle,
    '&:last-of-type': endBorderStyle
  }, (ownerState.isStartOfHighlighting || ownerState.isStartOfMonth) && _extends({}, startBorderStyle, {
    paddingLeft: 0,
    marginLeft: DAY_MARGIN / 2
  }), (ownerState.isEndOfHighlighting || ownerState.isEndOfMonth) && _extends({}, endBorderStyle, {
    paddingRight: 0,
    marginRight: DAY_MARGIN / 2
  }));
});
var DateRangePickerDayRangeIntervalPreview = styled('div', {
  name: 'MuiDateRangePickerDay',
  slot: 'RangeIntervalPreview'
})(function (_ref2) {
  var theme = _ref2.theme,
      ownerState = _ref2.ownerState;
  return _extends({
    // replace default day component margin with transparent border to avoid jumping on preview
    border: '2px solid transparent'
  }, ownerState.isPreviewing && !ownerState.outsideCurrentMonth && _extends({
    borderRadius: 0,
    border: "2px dashed ".concat(theme.palette.divider),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  }, (ownerState.isStartOfPreviewing || ownerState.isStartOfMonth) && _extends({
    borderLeftColor: theme.palette.divider
  }, startBorderStyle), (ownerState.isEndOfPreviewing || ownerState.isEndOfMonth) && _extends({
    borderRightColor: theme.palette.divider
  }, endBorderStyle)));
});
var DateRangePickerDayDay = styled(PickersDay, {
  name: 'MuiDateRangePickerDay',
  slot: 'Day'
})(function (_ref3) {
  var theme = _ref3.theme,
      ownerState = _ref3.ownerState;
  return _extends({
    // Required to overlap preview border
    transform: 'scale(1.1)',
    '& > *': {
      transform: 'scale(0.9)'
    }
  }, !ownerState.selected && {
    backgroundColor: 'transparent'
  }, !ownerState.isHighlighting && {
    '&:hover': {
      border: "1px solid ".concat(theme.palette.grey[500])
    }
  }, !ownerState.selected && ownerState.isHighlighting && {
    color: theme.palette.getContrastText(alpha(theme.palette.primary.light, 0.6))
  });
});
var DateRangePickerDay = /*#__PURE__*/React.forwardRef(function DateRangePickerDay(props, ref) {
  var className = props.className,
      day = props.day,
      outsideCurrentMonth = props.outsideCurrentMonth,
      isEndOfHighlighting = props.isEndOfHighlighting,
      isEndOfPreviewing = props.isEndOfPreviewing,
      isHighlighting = props.isHighlighting,
      isPreviewing = props.isPreviewing,
      isStartOfHighlighting = props.isStartOfHighlighting,
      isStartOfPreviewing = props.isStartOfPreviewing,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = _objectWithoutProperties(props, ["className", "day", "outsideCurrentMonth", "isEndOfHighlighting", "isEndOfPreviewing", "isHighlighting", "isPreviewing", "isStartOfHighlighting", "isStartOfPreviewing", "selected"]);

  var utils = useUtils();
  var isEndOfMonth = utils.isSameDay(day, utils.endOfMonth(day));
  var isStartOfMonth = utils.isSameDay(day, utils.startOfMonth(day));
  var shouldRenderHighlight = isHighlighting && !outsideCurrentMonth;
  var shouldRenderPreview = isPreviewing && !outsideCurrentMonth;

  var ownerState = _extends({}, props, {
    selected: selected,
    isStartOfMonth: isStartOfMonth,
    isEndOfMonth: isEndOfMonth
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(DateRangePickerDayRoot, {
    className: clsx(classes.root, className),
    ownerState: ownerState,
    children: /*#__PURE__*/_jsx(DateRangePickerDayRangeIntervalPreview, {
      role: "cell",
      className: classes.rangeIntervalPreview,
      ownerState: ownerState,
      children: /*#__PURE__*/_jsx(DateRangePickerDayDay, _extends({}, other, {
        ref: ref,
        disableMargin: true,
        allowSameDateSelection: true,
        day: day,
        selected: selected,
        outsideCurrentMonth: outsideCurrentMonth,
        className: classes.day,
        ownerState: ownerState
      }))
    })
  });
});
process.env.NODE_ENV !== "production" ? DateRangePickerDay.propTypes
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
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The date to show.
   */
  day: PropTypes.any.isRequired,

  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isEndOfHighlighting: PropTypes.bool.isRequired,

  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isEndOfPreviewing: PropTypes.bool.isRequired,

  /**
   * Set to `true` if the `day` is in a highlighted date range.
   */
  isHighlighting: PropTypes.bool.isRequired,

  /**
   * Set to `true` if the `day` is in a preview date range.
   */
  isPreviewing: PropTypes.bool.isRequired,

  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isStartOfHighlighting: PropTypes.bool.isRequired,

  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isStartOfPreviewing: PropTypes.bool.isRequired,

  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: PropTypes.bool.isRequired,

  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/components/date-range-picker/)
 *
 * API:
 *
 * - [DateRangePickerDay API](https://mui.com/api/date-range-picker-day/)
 */

export default /*#__PURE__*/React.memo(DateRangePickerDay, function (prevProps, nextProps) {
  return prevProps.isHighlighting === nextProps.isHighlighting && prevProps.isEndOfHighlighting === nextProps.isEndOfHighlighting && prevProps.isStartOfHighlighting === nextProps.isStartOfHighlighting && prevProps.isPreviewing === nextProps.isPreviewing && prevProps.isEndOfPreviewing === nextProps.isEndOfPreviewing && prevProps.isStartOfPreviewing === nextProps.isStartOfPreviewing && areDayPropsEqual(prevProps, nextProps);
});