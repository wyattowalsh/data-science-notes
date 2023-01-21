"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@mui/material/utils");

var _styles = require("@mui/material/styles");

var _base = require("@mui/base");

var _TimelineContent = require("../TimelineContent");

var _TimelineOppositeContent = require("../TimelineOppositeContent");

var _TimelineContext = _interopRequireDefault(require("../Timeline/TimelineContext"));

var _timelineItemClasses = require("./timelineItemClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["position", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    position,
    classes,
    hasOppositeContent
  } = ownerState;
  const slots = {
    root: ['root', `position${(0, _utils.capitalize)(position)}`, !hasOppositeContent && 'missingOppositeContent']
  };
  return (0, _base.unstable_composeClasses)(slots, _timelineItemClasses.getTimelineItemUtilityClass, classes);
};

const TimelineItemRoot = (0, _styles.styled)('li', {
  name: 'MuiTimelineItem',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${(0, _utils.capitalize)(ownerState.position)}`]];
  }
})(({
  ownerState
}) => (0, _extends2.default)({
  listStyle: 'none',
  display: 'flex',
  position: 'relative',
  minHeight: 70
}, ownerState.position === 'left' && {
  flexDirection: 'row-reverse'
}, ownerState.position === 'alternate' && {
  '&:nth-of-type(even)': {
    flexDirection: 'row-reverse',
    [`& .${_TimelineContent.timelineContentClasses.root}`]: {
      textAlign: 'right'
    },
    [`& .${_TimelineOppositeContent.timelineOppositeContentClasses.root}`]: {
      textAlign: 'left'
    }
  }
}, !ownerState.hasOppositeContent && {
  '&:before': {
    content: '""',
    flex: 1,
    padding: '6px 16px'
  }
}));
const TimelineItem = /*#__PURE__*/React.forwardRef(function TimelineItem(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiTimelineItem'
  });
  const {
    position: positionProp,
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    position: positionContext
  } = React.useContext(_TimelineContext.default);
  let hasOppositeContent = false;
  React.Children.forEach(props.children, child => {
    if ((0, _utils.isMuiElement)(child, ['TimelineOppositeContent'])) {
      hasOppositeContent = true;
    }
  });
  const ownerState = (0, _extends2.default)({}, props, {
    position: positionProp || positionContext || 'right',
    hasOppositeContent
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimelineContext.default.Provider, {
    value: {
      position: ownerState.position
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TimelineItemRoot, (0, _extends2.default)({
      className: (0, _clsx.default)(classes.root, className),
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
   * The position where the timeline's item should appear.
   */
  position: _propTypes.default.oneOf(['left', 'right']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = TimelineItem;
exports.default = _default;