import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled, useThemeProps as useThemProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import clsx from 'clsx';
import PickersYear from './PickersYear';
import { useUtils, useNow } from '../internal/pickers/hooks/useUtils';
import { findClosestEnabledDate } from '../internal/pickers/date-utils';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
import { getYearPickerUtilityClass } from './yearPickerClasses';
import { jsx as _jsx } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getYearPickerUtilityClass, classes);
};

var YearPickerRoot = styled('div', {
  name: 'MuiYearPicker',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflowY: 'auto',
  height: '100%',
  margin: '0 4px'
});
var YearPicker = /*#__PURE__*/React.forwardRef(function YearPicker(inProps, ref) {
  var props = useThemProps({
    props: inProps,
    name: 'MuiYearPicker'
  });
  var autoFocus = props.autoFocus,
      className = props.className,
      date = props.date,
      disabled = props.disabled,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      isDateDisabled = props.isDateDisabled,
      maxDate = props.maxDate,
      minDate = props.minDate,
      onChange = props.onChange,
      onFocusedDayChange = props.onFocusedDayChange,
      onYearChange = props.onYearChange,
      readOnly = props.readOnly,
      shouldDisableYear = props.shouldDisableYear;
  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  var now = useNow();
  var theme = useTheme();
  var utils = useUtils();
  var selectedDate = date || now;
  var currentYear = utils.getYear(selectedDate);
  var wrapperVariant = React.useContext(WrapperVariantContext);
  var selectedYearRef = React.useRef(null);

  var _React$useState = React.useState(currentYear),
      focusedYear = _React$useState[0],
      setFocusedYear = _React$useState[1];

  var handleYearSelection = function handleYearSelection(event, year) {
    var isFinish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'finish';

    if (readOnly) {
      return;
    }

    var submitDate = function submitDate(newDate) {
      onChange(newDate, isFinish);

      if (onFocusedDayChange) {
        onFocusedDayChange(newDate || now);
      }

      if (onYearChange) {
        onYearChange(newDate);
      }
    };

    var newDate = utils.setYear(selectedDate, year);

    if (isDateDisabled(newDate)) {
      var closestEnabledDate = findClosestEnabledDate({
        utils: utils,
        date: newDate,
        minDate: minDate,
        maxDate: maxDate,
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: isDateDisabled
      });
      submitDate(closestEnabledDate || now);
    } else {
      submitDate(newDate);
    }
  };

  var focusYear = React.useCallback(function (year) {
    if (!isDateDisabled(utils.setYear(selectedDate, year))) {
      setFocusedYear(year);
    }
  }, [selectedDate, isDateDisabled, utils]);
  var yearsInRow = wrapperVariant === 'desktop' ? 4 : 3;

  var handleKeyDown = function handleKeyDown(event, year) {
    switch (event.key) {
      case 'ArrowUp':
        focusYear(year - yearsInRow);
        event.preventDefault();
        break;

      case 'ArrowDown':
        focusYear(year + yearsInRow);
        event.preventDefault();
        break;

      case 'ArrowLeft':
        focusYear(year + (theme.direction === 'ltr' ? -1 : 1));
        event.preventDefault();
        break;

      case 'ArrowRight':
        focusYear(year + (theme.direction === 'ltr' ? 1 : -1));
        event.preventDefault();
        break;

      default:
        break;
    }
  };

  return /*#__PURE__*/_jsx(YearPickerRoot, {
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    children: utils.getYearRange(minDate, maxDate).map(function (year) {
      var yearNumber = utils.getYear(year);
      var selected = yearNumber === currentYear;
      return /*#__PURE__*/_jsx(PickersYear, {
        selected: selected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: autoFocus && yearNumber === focusedYear,
        ref: selected ? selectedYearRef : undefined,
        disabled: disabled || disablePast && utils.isBeforeYear(year, now) || disableFuture && utils.isAfterYear(year, now) || shouldDisableYear && shouldDisableYear(year),
        children: utils.format(year, 'year')
      }, utils.format(year, 'year'));
    })
  });
});
process.env.NODE_ENV !== "production" ? YearPicker.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  autoFocus: PropTypes.bool,

  /**
   * @ignore
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @ignore
   */
  date: PropTypes.any,

  /**
   * @ignore
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   */
  disableFuture: PropTypes.bool,

  /**
   * @ignore
   */
  disablePast: PropTypes.bool,

  /**
   * @ignore
   */
  isDateDisabled: PropTypes.func.isRequired,

  /**
   * @ignore
   */
  maxDate: PropTypes.any.isRequired,

  /**
   * @ignore
   */
  minDate: PropTypes.any.isRequired,

  /**
   * @ignore
   */
  onChange: PropTypes.func.isRequired,

  /**
   * @ignore
   */
  onFocusedDayChange: PropTypes.func,

  /**
   * Callback firing on year change @DateIOType.
   */
  onYearChange: PropTypes.func,

  /**
   * @ignore
   */
  readOnly: PropTypes.bool,

  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   */
  shouldDisableYear: PropTypes.func
} : void 0;
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/date-picker/)
 *
 * API:
 *
 * - [YearPicker API](https://mui.com/api/year-picker/)
 */

export default YearPicker;