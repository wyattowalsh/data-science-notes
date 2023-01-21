import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { chainPropTypes } from '@mui/utils';
import appendOwnerState from '../utils/appendOwnerState';
import isHostComponent from '../utils/isHostComponent';
import composeClasses from '../composeClasses';
import { getSliderUtilityClass } from './sliderUnstyledClasses';
import SliderValueLabelUnstyled from './SliderValueLabelUnstyled';
import useSlider, { valueToPercent } from './useSlider';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Identity = function Identity(x) {
  return x;
};

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var disabled = ownerState.disabled,
      dragging = ownerState.dragging,
      marked = ownerState.marked,
      orientation = ownerState.orientation,
      track = ownerState.track,
      classes = ownerState.classes;
  var slots = {
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
  return composeClasses(slots, getSliderUtilityClass, classes);
};

var Forward = function Forward(_ref) {
  var children = _ref.children;
  return children;
};

var SliderUnstyled = /*#__PURE__*/React.forwardRef(function SliderUnstyled(props, ref) {
  var _ref2, _components$Rail, _components$Track, _components$Thumb, _components$ValueLabe, _components$Mark, _components$MarkLabel;

  var ariaLabel = props['aria-label'],
      ariaValuetext = props['aria-valuetext'],
      className = props.className,
      component = props.component,
      classesProp = props.classes,
      _props$disableSwap = props.disableSwap,
      disableSwap = _props$disableSwap === void 0 ? false : _props$disableSwap,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      getAriaLabel = props.getAriaLabel,
      getAriaValueText = props.getAriaValueText,
      _props$marks = props.marks,
      marksProp = _props$marks === void 0 ? false : _props$marks,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      name = props.name,
      onChange = props.onChange,
      onChangeCommitted = props.onChangeCommitted,
      onMouseDown = props.onMouseDown,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$scale = props.scale,
      scale = _props$scale === void 0 ? Identity : _props$scale,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      tabIndex = props.tabIndex,
      _props$track = props.track,
      track = _props$track === void 0 ? 'normal' : _props$track,
      valueProp = props.value,
      _props$valueLabelDisp = props.valueLabelDisplay,
      valueLabelDisplay = _props$valueLabelDisp === void 0 ? 'off' : _props$valueLabelDisp,
      _props$valueLabelForm = props.valueLabelFormat,
      valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm,
      _props$isRtl = props.isRtl,
      isRtl = _props$isRtl === void 0 ? false : _props$isRtl,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      other = _objectWithoutProperties(props, ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"]); // all props with defaults
  // consider extracting to hook an reusing the lint rule for the varints


  var ownerState = _extends({}, props, {
    mark: marksProp,
    classes: classesProp,
    disabled: disabled,
    isRtl: isRtl,
    max: max,
    min: min,
    orientation: orientation,
    scale: scale,
    step: step,
    track: track,
    valueLabelDisplay: valueLabelDisplay,
    valueLabelFormat: valueLabelFormat
  });

  var _useSlider = useSlider(_extends({}, ownerState, {
    ref: ref
  })),
      axisProps = _useSlider.axisProps,
      getRootProps = _useSlider.getRootProps,
      getHiddenInputProps = _useSlider.getHiddenInputProps,
      getThumbProps = _useSlider.getThumbProps,
      open = _useSlider.open,
      active = _useSlider.active,
      axis = _useSlider.axis,
      range = _useSlider.range,
      focusVisible = _useSlider.focusVisible,
      dragging = _useSlider.dragging,
      marks = _useSlider.marks,
      values = _useSlider.values,
      trackOffset = _useSlider.trackOffset,
      trackLeap = _useSlider.trackLeap;

  ownerState.marked = marks.length > 0 && marks.some(function (mark) {
    return mark.label;
  });
  ownerState.dragging = dragging;
  var Root = (_ref2 = component != null ? component : components.Root) != null ? _ref2 : 'span';
  var rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  var Rail = (_components$Rail = components.Rail) != null ? _components$Rail : 'span';
  var railProps = appendOwnerState(Rail, componentsProps.rail, ownerState);
  var Track = (_components$Track = components.Track) != null ? _components$Track : 'span';
  var trackProps = appendOwnerState(Track, componentsProps.track, ownerState);

  var trackStyle = _extends({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));

  var Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  var thumbProps = appendOwnerState(Thumb, componentsProps.thumb, ownerState);
  var ValueLabel = (_components$ValueLabe = components.ValueLabel) != null ? _components$ValueLabe : SliderValueLabelUnstyled;
  var valueLabelProps = appendOwnerState(ValueLabel, componentsProps.valueLabel, ownerState);
  var Mark = (_components$Mark = components.Mark) != null ? _components$Mark : 'span';
  var markProps = appendOwnerState(Mark, componentsProps.mark, ownerState);
  var MarkLabel = (_components$MarkLabel = components.MarkLabel) != null ? _components$MarkLabel : 'span';
  var markLabelProps = appendOwnerState(MarkLabel, componentsProps.markLabel, ownerState);
  var Input = components.Input || 'input';
  var inputProps = appendOwnerState(Input, componentsProps.input, ownerState);
  var hiddenInputProps = getHiddenInputProps();
  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, getRootProps({
    onMouseDown: onMouseDown
  }), {
    className: clsx(classes.root, rootProps.className, className),
    children: [/*#__PURE__*/_jsx(Rail, _extends({}, railProps, {
      className: clsx(classes.rail, railProps.className)
    })), /*#__PURE__*/_jsx(Track, _extends({}, trackProps, {
      className: clsx(classes.track, trackProps.className),
      style: _extends({}, trackStyle, trackProps.style)
    })), marks.map(function (mark, index) {
      var percent = valueToPercent(mark.value, min, max);
      var style = axisProps[axis].offset(percent);
      var markActive;

      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }

      return /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsx(Mark, _extends({
          "data-index": index
        }, markProps, !isHostComponent(Mark) && {
          markActive: markActive
        }, {
          style: _extends({}, style, markProps.style),
          className: clsx(classes.mark, markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /*#__PURE__*/_jsx(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style, markLabelProps.style),
          className: clsx(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values.map(function (value, index) {
      var percent = valueToPercent(value, min, max);
      var style = axisProps[axis].offset(percent);
      var ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabel;
      return /*#__PURE__*/_jsx(React.Fragment, {
        children: /*#__PURE__*/_jsx(ValueLabelComponent, _extends({}, !isHostComponent(ValueLabelComponent) && {
          valueLabelFormat: valueLabelFormat,
          valueLabelDisplay: valueLabelDisplay,
          value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index: index,
          open: open === index || active === index || valueLabelDisplay === 'on',
          disabled: disabled
        }, valueLabelProps, {
          className: clsx(classes.valueLabel, valueLabelProps.className),
          children: /*#__PURE__*/_jsx(Thumb, _extends({
            "data-index": index
          }, thumbProps, getThumbProps(), {
            className: clsx(classes.thumb, thumbProps.className, active === index && classes.active, focusVisible === index && classes.focusVisible)
          }, !isHostComponent(Thumb) && {
            ownerState: _extends({}, ownerState, thumbProps.ownerState)
          }, {
            style: _extends({}, style, {
              pointerEvents: disableSwap && active !== index ? 'none' : undefined
            }, thumbProps.style),
            children: /*#__PURE__*/_jsx(Input, _extends({}, hiddenInputProps, {
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index]
            }, !isHostComponent(Input) && {
              ownerState: _extends({}, ownerState, inputProps.ownerState)
            }, inputProps, {
              style: _extends({}, hiddenInputProps.style, inputProps.style)
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
  'aria-label': chainPropTypes(PropTypes.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-label'] != null) {
      return new Error('MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.');
    }

    return null;
  }),

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby': PropTypes.string,

  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  'aria-valuetext': chainPropTypes(PropTypes.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-valuetext'] != null) {
      return new Error('MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.');
    }

    return null;
  }),

  /**
   * @ignore
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
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Mark: PropTypes.elementType,
    MarkLabel: PropTypes.elementType,
    Rail: PropTypes.elementType,
    Root: PropTypes.elementType,
    Thumb: PropTypes.elementType,
    Track: PropTypes.elementType,
    ValueLabel: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    input: PropTypes.object,
    mark: PropTypes.object,
    markLabel: PropTypes.object,
    rail: PropTypes.object,
    root: PropTypes.object,
    thumb: PropTypes.object,
    track: PropTypes.object,
    valueLabel: PropTypes.shape({
      className: PropTypes.string,
      components: PropTypes.shape({
        Root: PropTypes.elementType
      }),
      style: PropTypes.object,
      value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
      valueLabelDisplay: PropTypes.oneOf(['auto', 'off', 'on'])
    })
  }),

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: PropTypes.bool,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: PropTypes.func,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: PropTypes.func,

  /**
   * Indicates whether the theme context has rtl direction. It is set automatically.
   * @default false
   */
  isRtl: PropTypes.bool,

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.number.isRequired
  })), PropTypes.bool]),

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: PropTypes.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: PropTypes.number,

  /**
   * Name attribute of the hidden `input` element.
   */
  name: PropTypes.string,

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: PropTypes.func,

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: PropTypes.func,

  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,

  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * A transformation function, to change the scale of the slider.
   * @default (x) => x
   */
  scale: PropTypes.func,

  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: PropTypes.number,

  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: PropTypes.number,

  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: PropTypes.oneOf(['inverted', 'normal', false]),

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: PropTypes.oneOf(['auto', 'off', 'on']),

  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @default (x) => x
   */
  valueLabelFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
} : void 0;
export default SliderUnstyled;