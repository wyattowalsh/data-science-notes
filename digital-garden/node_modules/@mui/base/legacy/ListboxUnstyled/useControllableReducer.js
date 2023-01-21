import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { unstable_useControlled as useControlled } from '@mui/utils';
import { ActionTypes } from './useListbox.types';
import areArraysEqual from '../utils/areArraysEqual';
/**
 * Triggers change event handlers when reducer returns changed state.
 */

function useReducerReturnValueHandler(state, value, options, optionComparer, setValueState, onValueChange, onHighlightChange) {
  var valueRef = React.useRef(value);
  valueRef.current = value;
  var onValueChangeRef = React.useRef(onValueChange);
  React.useEffect(function () {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);
  var onHighlightChangeRef = React.useRef(onHighlightChange);
  React.useEffect(function () {
    onHighlightChangeRef.current = onHighlightChange;
  }, [onHighlightChange]);
  React.useEffect(function () {
    if (Array.isArray(state.selectedValue)) {
      if (areArraysEqual(state.selectedValue, valueRef.current)) {
        return;
      }
    } else if (state.selectedValue == null && valueRef.current == null || state.selectedValue != null && valueRef.current != null && optionComparer.current(state.selectedValue, valueRef.current)) {
      return;
    }

    setValueState(state.selectedValue);

    if (state.selectedValue != null) {
      var _onValueChangeRef$cur;

      // @ts-ignore We know that selectedValue has the correct type depending on `selectMultiple` prop.
      (_onValueChangeRef$cur = onValueChangeRef.current) == null ? void 0 : _onValueChangeRef$cur.call(onValueChangeRef, state.selectedValue);
    }
  }, [state.selectedValue, setValueState, optionComparer]);
  React.useEffect(function () {
    var _onHighlightChangeRef;

    // Fire the highlightChange event when reducer returns changed `highlightedIndex`.
    (_onHighlightChangeRef = onHighlightChangeRef.current) == null ? void 0 : _onHighlightChangeRef.call(onHighlightChangeRef, state.highlightedValue);
  }, [state.highlightedValue]);
}

export default function useControllableReducer(internalReducer, externalReducer, props) {
  var controlledValue = props.value,
      defaultValue = props.defaultValue,
      onValueChange = props.onChange,
      onHighlightChange = props.onHighlightChange,
      options = props.options,
      optionComparer = props.optionComparer;
  var propsRef = React.useRef(props);
  propsRef.current = props;

  var _useControlled = useControlled({
    controlled: controlledValue,
    default: defaultValue,
    name: 'useListbox'
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      value = _useControlled2[0],
      setValueState = _useControlled2[1];

  var previousValueRef = React.useRef(null);

  var _React$useReducer = React.useReducer(externalReducer != null ? externalReducer : internalReducer, {
    highlightedValue: null,
    selectedValue: value
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var optionComparerRef = React.useRef(optionComparer);
  optionComparerRef.current = optionComparer;
  React.useEffect(function () {
    // Detect external changes to the controlled `value` prop and update the state.
    if (controlledValue === undefined) {
      return;
    }

    if (Array.isArray(controlledValue) && Array.isArray(previousValueRef.current) && areArraysEqual(previousValueRef.current, controlledValue, optionComparerRef.current)) {
      // `value` is an array and it did not change.
      return;
    }

    if (!Array.isArray(controlledValue) && controlledValue != null && previousValueRef.current != null && optionComparerRef.current(controlledValue, previousValueRef.current)) {
      // `value` is a single option and it did not change.
      return;
    }

    previousValueRef.current = controlledValue;
    dispatch({
      type: ActionTypes.setValue,
      value: controlledValue
    });
  }, [controlledValue]);
  useReducerReturnValueHandler(state, value, options, optionComparerRef, setValueState, onValueChange, onHighlightChange);
  return [state, dispatch];
}