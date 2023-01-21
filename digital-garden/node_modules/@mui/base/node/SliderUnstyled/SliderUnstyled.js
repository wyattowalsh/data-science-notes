"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@mui/utils");

var _appendOwnerState = _interopRequireDefault(require("../utils/appendOwnerState"));

var _isHostComponent = _interopRequireDefault(require("../utils/isHostComponent"));

var _composeClasses = _interopRequireDefault(require("../composeClasses"));

var _sliderUnstyledClasses = require("./sliderUnstyledClasses");

var _SliderValueLabelUnstyled = _interopRequireDefault(require("./SliderValueLabelUnstyled"));

var _useSlider = _interopRequireWildcard(require("./useSlider"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Identity = x => x;

const useUtilityClasses = ownerState => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse'],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled'],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible']
  };
  return (0, _composeClasses.default)(slots, _sliderUnstyledClasses.getSliderUtilityClass, classes);
};

const Forward = ({
  children
}) => children;

const SliderUnstyled = /*#__PURE__*/React.forwardRef(function SliderUnstyled(props, ref) {
  var _ref, _components$Rail, _components$Track, _components$Thumb, _components$ValueLabe, _components$Mark, _components$MarkLabel;

  const {
    'aria-label': ariaLabel,
    'aria-valuetext': ariaValuetext,
    className,
    component,
    classes: classesProp,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    onMouseDown,
    orientation = 'horizontal',
    scale = Identity,
    step = 1,
    track = 'normal',
    valueLabelDisplay = 'off',
    valueLabelFormat = Identity,
    isRtl = false,
    components = {},
    componentsProps = {}
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded); // all props with defaults
  // consider extracting to hook an reusing the lint rule for the varints

  const ownerState = (0, _extends2.default)({}, props, {
    mark: marksProp,
    classes: classesProp,
    disabled,
    isRtl,
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });
  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    range,
    focusVisible,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap
  } = (0, _useSlider.default)((0, _extends2.default)({}, ownerState, {
    ref
  }));
  ownerState.marked = marks.length > 0 && marks.some(mark => mark.label);
  ownerState.dragging = dragging;
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'span';
  const rootProps = (0, _appendOwnerState.default)(Root, (0, _extends2.default)({}, other, componentsProps.root), ownerState);
  const Rail = (_components$Rail = components.Rail) != null ? _components$Rail : 'span';
  const railProps = (0, _appendOwnerState.default)(Rail, componentsProps.rail, ownerState);
  const Track = (_components$Track = components.Track) != null ? _components$Track : 'span';
  const trackProps = (0, _appendOwnerState.default)(Track, componentsProps.track, ownerState);
  const trackStyle = (0, _extends2.default)({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));
  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  const thumbProps = (0, _appendOwnerState.default)(Thumb, componentsProps.thumb, ownerState);
  const ValueLabel = (_components$ValueLabe = components.ValueLabel) != null ? _components$ValueLabe : _SliderValueLabelUnstyled.default;
  const valueLabelProps = (0, _appendOwnerState.default)(ValueLabel, componentsProps.valueLabel, ownerState);
  const Mark = (_components$Mark = components.Mark) != null ? _components$Mark : 'span';
  const markProps = (0, _appendOwnerState.default)(Mark, componentsProps.mark, ownerState);
  const MarkLabel = (_components$MarkLabel = components.MarkLabel) != null ? _components$MarkLabel : 'span';
  const markLabelProps = (0, _appendOwnerState.default)(MarkLabel, componentsProps.markLabel, ownerState);
  const Input = components.Input || 'input';
  const inputProps = (0, _appendOwnerState.default)(Input, componentsProps.input, ownerState);
  const hiddenInputProps = getHiddenInputProps();
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, getRootProps({
    onMouseDown
  }), {
    className: (0, _clsx.default)(classes.root, rootProps.className, className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Rail, (0, _extends2.default)({}, railProps, {
      className: (0, _clsx.default)(classes.rail, railProps.className)
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(Track, (0, _extends2.default)({}, trackProps, {
      className: (0, _clsx.default)(classes.track, trackProps.className),
      style: (0, _extends2.default)({}, trackStyle, trackProps.style)
    })), marks.map((mark, index) => {
      const percent = (0, _useSlider.valueToPercent)(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;

      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Mark, (0, _extends2.default)({
          "data-index": index
        }, markProps, !(0, _isHostComponent.default)(Mark) && {
          markActive
        }, {
          style: (0, _extends2.default)({}, style, markProps.style),
          className: (0, _clsx.default)(classes.mark, markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(MarkLabel, (0, _extends2.default)({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !(0, _isHostComponent.default)(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: (0, _extends2.default)({}, style, markLabelProps.style),
          className: (0, _clsx.default)(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values.map((value, index) => {
      const percent = (0, _useSlider.valueToPercent)(value, min, max);
      const style = axisProps[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ValueLabelComponent, (0, _extends2.default)({}, !(0, _isHostComponent.default)(ValueLabelComponent) && {
          valueLabelFormat,
          valueLabelDisplay,
          value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index,
          open: open === index || active === index || valueLabelDisplay === 'on',
          disabled
        }, valueLabelProps, {
          className: (0, _clsx.default)(classes.valueLabel, valueLabelProps.className),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Thumb, (0, _extends2.default)({
            "data-index": index
          }, thumbProps, getThumbProps(), {
            className: (0, _clsx.default)(classes.thumb, thumbProps.className, active === index && classes.active, focusVisible === index && classes.focusVisible)
          }, !(0, _isHostComponent.default)(Thumb) && {
            ownerState: (0, _extends2.default)({}, ownerState, thumbProps.ownerState)
          }, {
            style: (0, _extends2.default)({}, style, {
              pointerEvents: disableSwap && active !== index ? 'none' : undefined
            }, thumbProps.style),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({}, hiddenInputProps, {
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index]
            }, !(0, _isHostComponent.default)(Input) && {
              ownerState: (0, _extends2.default)({}, ownerState, inputProps.ownerState)
            }, inputProps, {
              style: (0, _extends2.default)({}, hiddenInputProps.style, inputProps.style)
            }))
          }))
        }))
      }, index);
    })]
  }));
});
process.env.NODE_ENV !== "production" ? SliderUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The label of the slider.
   */
  'aria-label': (0, _utils.chainPropTypes)(_propTypes.default.string, props => {
    const range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-label'] != null) {
      return new Error('MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.');
    }

    return null;
  }),

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby': _propTypes.default.string,

  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  'aria-valuetext': (0, _utils.chainPropTypes)(_propTypes.default.string, props => {
    const range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-valuetext'] != null) {
      return new Error('MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.');
    }

    return null;
  }),

  /**
   * @ignore
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Input: _propTypes.default.elementType,
    Mark: _propTypes.default.elementType,
    MarkLabel: _propTypes.default.elementType,
    Rail: _propTypes.default.elementType,
    Root: _propTypes.default.elementType,
    Thumb: _propTypes.default.elementType,
    Track: _propTypes.default.elementType,
    ValueLabel: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    input: _propTypes.default.object,
    mark: _propTypes.default.object,
    markLabel: _propTypes.default.object,
    rail: _propTypes.default.object,
    root: _propTypes.default.object,
    thumb: _propTypes.default.object,
    track: _propTypes.default.object,
    valueLabel: _propTypes.default.shape({
      className: _propTypes.default.string,
      components: _propTypes.default.shape({
        Root: _propTypes.default.elementType
      }),
      style: _propTypes.default.object,
      value: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number]),
      valueLabelDisplay: _propTypes.default.oneOf(['auto', 'off', 'on'])
    })
  }),

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number]),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: _propTypes.default.bool,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: _propTypes.default.func,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: _propTypes.default.func,

  /**
   * Indicates whether the theme context has rtl direction. It is set automatically.
   * @default false
   */
  isRtl: _propTypes.default.bool,

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.node,
    value: _propTypes.default.number.isRequired
  })), _propTypes.default.bool]),

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: _propTypes.default.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: _propTypes.default.number,

  /**
   * Name attribute of the hidden `input` element.
   */
  name: _propTypes.default.string,

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),

  /**
   * A transformation function, to change the scale of the slider.
   * @default (x) => x
   */
  scale: _propTypes.default.func,

  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: _propTypes.default.number,

  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: _propTypes.default.number,

  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: _propTypes.default.oneOf(['inverted', 'normal', false]),

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number]),

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: _propTypes.default.oneOf(['auto', 'off', 'on']),

  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @default (x) => x
   */
  valueLabelFormat: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string])
} : void 0;
var _default = SliderUnstyled;
exports.default = _default;