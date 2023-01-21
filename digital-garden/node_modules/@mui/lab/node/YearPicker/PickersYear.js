"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getPickersYearUtilityClass = getPickersYearUtilityClass;
exports.pickersYearClasses = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@mui/material/utils");

var _styles = require("@mui/material/styles");

var _base = require("@mui/base");

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getPickersYearUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('PrivatePickersYear', slot);
}

const pickersYearClasses = (0, _base.generateUtilityClasses)('PrivatePickersYear', ['root', 'modeMobile', 'modeDesktop', 'yearButton', 'disabled', 'selected']);
exports.pickersYearClasses = pickersYearClasses;

const useUtilityClasses = ownerState => {
  const {
    wrapperVariant,
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', wrapperVariant && `mode${(0, _utils.capitalize)(wrapperVariant)}`],
    yearButton: ['yearButton', disabled && 'disabled', selected && 'selected']
  };
  return (0, _base.unstable_composeClasses)(slots, getPickersYearUtilityClass, classes);
};

const PickersYearRoot = (0, _styles.styled)('div')(({
  ownerState
}) => (0, _extends2.default)({
  flexBasis: '33.3%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}, (ownerState == null ? void 0 : ownerState.wrapperVariant) === 'desktop' && {
  flexBasis: '25%'
}));
const PickersYearButton = (0, _styles.styled)('button')(({
  theme
}) => (0, _extends2.default)({
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: '8px 0',
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus, &:hover': {
    backgroundColor: (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  [`&.${pickersYearClasses.disabled}`]: {
    color: theme.palette.text.secondary
  },
  [`&.${pickersYearClasses.selected}`]: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  }
}));
/**
 * @ignore - internal component.
 */

const PickersYear = /*#__PURE__*/React.forwardRef(function PickersYear(props, forwardedRef) {
  const {
    autoFocus,
    className,
    children,
    disabled,
    onClick,
    onKeyDown,
    selected,
    value
  } = props;
  const ref = React.useRef(null);
  const refHandle = (0, _utils.useForkRef)(ref, forwardedRef);
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
  const ownerState = (0, _extends2.default)({}, props, {
    wrapperVariant
  });
  const classes = useUtilityClasses(ownerState); // TODO: Can we just forward this to the button?

  React.useEffect(() => {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in MUIu
      ref.current.focus();
    }
  }, [autoFocus]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersYearRoot, {
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersYearButton, {
      ref: refHandle,
      disabled: disabled,
      type: "button",
      tabIndex: selected ? 0 : -1,
      onClick: event => onClick(event, value),
      onKeyDown: event => onKeyDown(event, value),
      className: classes.yearButton,
      ownerState: ownerState,
      children: children
    })
  });
});
var _default = PickersYear;
exports.default = _default;