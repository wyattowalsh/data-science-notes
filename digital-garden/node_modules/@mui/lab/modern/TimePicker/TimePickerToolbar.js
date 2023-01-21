import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["ampm", "ampmInClock", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"];
import * as React from 'react';
import clsx from 'clsx';
import { useTheme, styled } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses, generateUtilityClass, generateUtilityClasses } from '@mui/base';
import PickersToolbarText from '../internal/pickers/PickersToolbarText';
import PickersToolbarButton from '../internal/pickers/PickersToolbarButton';
import PickersToolbar from '../internal/pickers/PickersToolbar';
import { arrayIncludes } from '../internal/pickers/utils';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { useMeridiemMode } from '../internal/pickers/hooks/date-helpers-hooks';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass('PrivateTimePickerToolbar', slot);
}
export const timePickerToolbarClasses = generateUtilityClasses('PrivateTimePickerToolbar', ['separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel', 'penIconLandscape']);

const useUtilityClasses = ownerState => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    penIconLandscape: ['penIconLandscape'],
    separator: ['separator'],
    hourMinuteLabel: ['hourMinuteLabel', isLandscape && 'hourMinuteLabelLandscape', theme.direction === 'rtl' && 'hourMinuteLabelReverse'],
    ampmSelection: ['ampmSelection', isLandscape && 'ampmLandscape'],
    ampmLabel: ['ampmLabel']
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};

const TimePickerToolbarRoot = styled(PickersToolbar)({
  [`& .${timePickerToolbarClasses.penIconLandscape}`]: {
    marginTop: 'auto'
  }
});
const TimePickerToolbarSeparator = styled(PickersToolbarText)({
  outline: 0,
  margin: '0 4px 0 2px',
  cursor: 'default'
});
const TimePickerToolbarHourMinuteLabel = styled('div')(({
  theme,
  ownerState
}) => _extends({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
}, ownerState.isLandscape && {
  marginTop: 'auto'
}, theme.direction === 'rtl' && {
  flexDirection: 'row-reverse'
}));
const TimePickerToolbarAmPmSelection = styled('div')(({
  ownerState
}) => _extends({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: '4px 0 auto',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexBasis: '100%'
}, {
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
/**
 * @ignore - internal component.
 */

const TimePickerToolbar = props => {
  const {
    ampm,
    ampmInClock,
    date,
    isLandscape,
    isMobileKeyboardViewOpen,
    onChange,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarTitle = 'Select time',
    views
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const utils = useUtils();
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(date, ampm, onChange);

  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');

  const ownerState = props;
  const classes = useUtilityClasses(_extends({}, ownerState, {
    theme
  }));

  const separator = /*#__PURE__*/_jsx(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });

  return /*#__PURE__*/_jsxs(TimePickerToolbarRoot, _extends({
    viewType: "clock",
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    ownerState: ownerState,
    penIconClassName: clsx(isLandscape && classes.penIconLandscape)
  }, other, {
    children: [/*#__PURE__*/_jsxs(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState: ownerState,
      children: [arrayIncludes(views, 'hours') && /*#__PURE__*/_jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView('hours'),
        selected: openView === 'hours',
        value: date ? formatHours(date) : '--'
      }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/_jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView('minutes'),
        selected: openView === 'minutes',
        value: date ? utils.format(date, 'minutes') : '--'
      }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/_jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView('seconds'),
        selected: openView === 'seconds',
        value: date ? utils.format(date, 'seconds') : '--'
      })]
    }), showAmPmControl && /*#__PURE__*/_jsxs(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState: ownerState,
      children: [/*#__PURE__*/_jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === 'am',
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText('am'),
        onClick: () => handleMeridiemChange('am')
      }), /*#__PURE__*/_jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === 'pm',
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText('pm'),
        onClick: () => handleMeridiemChange('pm')
      })]
    })]
  }));
};

export default TimePickerToolbar;