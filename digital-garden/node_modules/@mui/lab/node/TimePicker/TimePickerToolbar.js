"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTimePickerToolbarUtilityClass = getTimePickerToolbarUtilityClass;
exports.timePickerToolbarClasses = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@mui/material/styles");

var _base = require("@mui/base");

var _PickersToolbarText = _interopRequireDefault(require("../internal/pickers/PickersToolbarText"));

var _PickersToolbarButton = _interopRequireDefault(require("../internal/pickers/PickersToolbarButton"));

var _PickersToolbar = _interopRequireDefault(require("../internal/pickers/PickersToolbar"));

var _utils = require("../internal/pickers/utils");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dateHelpersHooks = require("../internal/pickers/hooks/date-helpers-hooks");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["ampm", "ampmInClock", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getTimePickerToolbarUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('PrivateTimePickerToolbar', slot);
}

const timePickerToolbarClasses = (0, _base.generateUtilityClasses)('PrivateTimePickerToolbar', ['separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel', 'penIconLandscape']);
exports.timePickerToolbarClasses = timePickerToolbarClasses;

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
  return (0, _base.unstable_composeClasses)(slots, getTimePickerToolbarUtilityClass, classes);
};

const TimePickerToolbarRoot = (0, _styles.styled)(_PickersToolbar.default)({
  [`& .${timePickerToolbarClasses.penIconLandscape}`]: {
    marginTop: 'auto'
  }
});
const TimePickerToolbarSeparator = (0, _styles.styled)(_PickersToolbarText.default)({
  outline: 0,
  margin: '0 4px 0 2px',
  cursor: 'default'
});
const TimePickerToolbarHourMinuteLabel = (0, _styles.styled)('div')(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
}, ownerState.isLandscape && {
  marginTop: 'auto'
}, theme.direction === 'rtl' && {
  flexDirection: 'row-reverse'
}));
const TimePickerToolbarAmPmSelection = (0, _styles.styled)('div')(({
  ownerState
}) => (0, _extends2.default)({
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
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _useUtils.useUtils)();
  const theme = (0, _styles.useTheme)();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(date, ampm, onChange);

  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');

  const ownerState = props;
  const classes = useUtilityClasses((0, _extends2.default)({}, ownerState, {
    theme
  }));
  const separator = /*#__PURE__*/(0, _jsxRuntime.jsx)(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(TimePickerToolbarRoot, (0, _extends2.default)({
    viewType: "clock",
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    ownerState: ownerState,
    penIconClassName: (0, _clsx.default)(isLandscape && classes.penIconLandscape)
  }, other, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState: ownerState,
      children: [(0, _utils.arrayIncludes)(views, 'hours') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.default, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView('hours'),
        selected: openView === 'hours',
        value: date ? formatHours(date) : '--'
      }), (0, _utils.arrayIncludes)(views, ['hours', 'minutes']) && separator, (0, _utils.arrayIncludes)(views, 'minutes') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.default, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView('minutes'),
        selected: openView === 'minutes',
        value: date ? utils.format(date, 'minutes') : '--'
      }), (0, _utils.arrayIncludes)(views, ['minutes', 'seconds']) && separator, (0, _utils.arrayIncludes)(views, 'seconds') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.default, {
        variant: "h3",
        onClick: () => setOpenView('seconds'),
        selected: openView === 'seconds',
        value: date ? utils.format(date, 'seconds') : '--'
      })]
    }), showAmPmControl && /*#__PURE__*/(0, _jsxRuntime.jsxs)(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState: ownerState,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.default, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === 'am',
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText('am'),
        onClick: () => handleMeridiemChange('am')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.default, {
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

var _default = TimePickerToolbar;
exports.default = _default;