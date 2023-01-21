"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.areDayPropsEqual = void 0;
exports.getPickersDayUtilityClass = getPickersDayUtilityClass;
exports.pickersDayClasses = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ButtonBase = _interopRequireDefault(require("@mui/material/ButtonBase"));

var _utils = require("@mui/utils");

var _base = require("@mui/base");

var _styles = require("@mui/material/styles");

var _utils2 = require("@mui/material/utils");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dimensions = require("../internal/pickers/constants/dimensions");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["allowSameDateSelection", "autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDayFocus", "onDaySelect", "onFocus", "onKeyDown", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getPickersDayUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiPickersDay', slot);
}

const pickersDayClasses = (0, _base.generateUtilityClasses)('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);
exports.pickersDayClasses = pickersDayClasses;

const useUtilityClasses = ownerState => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', !disableMargin && 'dayWithMargin', !disableHighlightToday && today && 'today', outsideCurrentMonth && showDaysOutsideCurrentMonth && 'dayOutsideMonth'],
    hiddenDaySpacingFiller: ['hiddenDaySpacingFiller']
  };
  return (0, _base.unstable_composeClasses)(slots, getPickersDayUtilityClass, classes);
};

const styleArg = ({
  theme,
  ownerState
}) => (0, _extends2.default)({}, theme.typography.caption, {
  width: _dimensions.DAY_SIZE,
  height: _dimensions.DAY_SIZE,
  borderRadius: '50%',
  padding: 0,
  // background required here to prevent collides with the other days when animating with transition group
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:focus': {
    backgroundColor: (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: 'background-color',
      backgroundColor: theme.palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      willChange: 'background-color',
      backgroundColor: theme.palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}`]: {
    color: theme.palette.text.disabled
  }
}, !ownerState.disableMargin && {
  margin: `0 ${_dimensions.DAY_MARGIN}px`
}, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
  color: theme.palette.text.secondary
}, !ownerState.disableHighlightToday && ownerState.today && {
  [`&:not(.${pickersDayClasses.selected})`]: {
    border: `1px solid ${theme.palette.text.secondary}`
  }
});

const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};

const PickersDayRoot = (0, _styles.styled)(_ButtonBase.default, {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver
})(styleArg);
const PickersDayFiller = (0, _styles.styled)('div', {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({}, styleArg({
  theme,
  ownerState
}), {
  visibility: 'hidden'
}));

const noop = () => {};

const PickersDay = /*#__PURE__*/React.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersDay'
  });
  const {
    allowSameDateSelection = false,
    autoFocus = false,
    className,
    day,
    disabled = false,
    disableHighlightToday = false,
    disableMargin = false,
    isAnimating,
    onClick,
    onDayFocus = noop,
    onDaySelect,
    onFocus,
    onKeyDown,
    outsideCurrentMonth,
    selected = false,
    showDaysOutsideCurrentMonth = false,
    children,
    today: isToday = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    allowSameDateSelection,
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = useUtilityClasses(ownerState);
  const utils = (0, _useUtils.useUtils)();
  const ref = React.useRef(null);
  const handleRef = (0, _utils2.useForkRef)(ref, forwardedRef); // Since this is rendered when a Popper is opened we can't use passive effects.
  // Focusing in passive effects in Popper causes scroll jump.

  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      // ref.current being null would be a bug in MUI
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);

  const handleFocus = event => {
    if (onDayFocus) {
      onDayFocus(day);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleClick = event => {
    if (!allowSameDateSelection && selected) {
      return;
    }

    if (!disabled) {
      onDaySelect(day, 'finish');
    }

    if (onClick) {
      onClick(event);
    }
  };

  const theme = (0, _styles.useTheme)();

  function handleKeyDown(event) {
    if (onKeyDown !== undefined) {
      onKeyDown(event);
    }

    switch (event.key) {
      case 'ArrowUp':
        onDayFocus(utils.addDays(day, -7));
        event.preventDefault();
        break;

      case 'ArrowDown':
        onDayFocus(utils.addDays(day, 7));
        event.preventDefault();
        break;

      case 'ArrowLeft':
        onDayFocus(utils.addDays(day, theme.direction === 'ltr' ? -1 : 1));
        event.preventDefault();
        break;

      case 'ArrowRight':
        onDayFocus(utils.addDays(day, theme.direction === 'ltr' ? 1 : -1));
        event.preventDefault();
        break;

      case 'Home':
        onDayFocus(utils.startOfWeek(day));
        event.preventDefault();
        break;

      case 'End':
        onDayFocus(utils.endOfWeek(day));
        event.preventDefault();
        break;

      case 'PageUp':
        onDayFocus(utils.getNextMonth(day));
        event.preventDefault();
        break;

      case 'PageDown':
        onDayFocus(utils.getPreviousMonth(day));
        event.preventDefault();
        break;

      default:
        break;
    }
  }

  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersDayFiller, {
      className: (0, _clsx.default)(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState: ownerState
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersDayRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    ref: handleRef,
    centerRipple: true,
    disabled: disabled,
    "aria-label": !children ? utils.format(day, 'fullDate') : undefined,
    tabIndex: selected ? 0 : -1,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  }, other, {
    children: !children ? utils.format(day, 'dayOfMonth') : children
  }));
});

const areDayPropsEqual = (prevProps, nextProps) => {
  return prevProps.autoFocus === nextProps.autoFocus && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.outsideCurrentMonth === nextProps.outsideCurrentMonth && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};

exports.areDayPropsEqual = areDayPropsEqual;
process.env.NODE_ENV !== "production" ? PickersDay.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * If `true`, `onChange` is fired on click even if the same date is selected.
   * @default false
   */
  allowSameDateSelection: _propTypes.default.bool,

  /**
   * @ignore
   */
  autoFocus: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The date to show.
   */
  day: _propTypes.default.any.isRequired,

  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, todays date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,

  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: _propTypes.default.bool,

  /**
   * @ignore
   */
  hidden: _propTypes.default.bool,

  /**
   * @ignore
   */
  isAnimating: _propTypes.default.bool,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onDayFocus: _propTypes.default.func,

  /**
   * @ignore
   */
  onDaySelect: _propTypes.default.func.isRequired,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: _propTypes.default.bool.isRequired,

  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: _propTypes.default.bool,

  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: _propTypes.default.bool
} : void 0;
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/date-picker/)
 *
 * API:
 *
 * - [PickersDay API](https://mui.com/api/pickers-day/)
 */

var _default = /*#__PURE__*/React.memo(PickersDay, areDayPropsEqual);

exports.default = _default;