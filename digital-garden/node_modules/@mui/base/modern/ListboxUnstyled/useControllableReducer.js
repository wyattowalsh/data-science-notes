import * as React from 'react';
import { unstable_useControlled as useControlled } from '@mui/utils';
import { ActionTypes } from './useListbox.types';
import areArraysEqual from '../utils/areArraysEqual';
/**
 * Triggers change event handlers when reducer returns changed state.
 */

function useReducerReturnValueHandler(state, value, options, optionComparer, setValueState, onValueChange, onHighlightChange) {
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const onValueChangeRef = React.useRef(onValueChange);
  React.useEffect(() => {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);
  const onHighlightChangeRef = React.useRef(onHighlightChange);
  React.useEffect(() => {
    onHighlightChangeRef.current = onHighlightChange;
  }, [onHighlightChange]);
  React.useEffect(() => {
    if (Array.isArray(state.selectedValue)) {
      if (areArraysEqual(state.selectedValue, valueRef.current)) {
        return;
      }
    } else if (state.selectedValue == null && valueRef.current == null || state.selectedValue != null && valueRef.current != null && optionComparer.current(state.selectedValue, valueRef.current)) {
      return;
    }

    setValueState(state.selectedValue);

    if (state.selectedValue != null) {
      // @ts-ignore We know that selectedValue has the correct type depending on `selectMultiple` prop.
      onValueChangeRef.current?.(state.selectedValue);
    }
  }, [state.selectedValue, setValueState, optionComparer]);
  React.useEffect(() => {
    // Fire the highlightChange event when reducer returns changed `highlightedIndex`.
    onHighlightChangeRef.current?.(state.highlightedValue);
  }, [state.highlightedValue]);
}

export default function useControllableReducer(internalReducer, externalReducer, props) {
  const {
    value: controlledValue,
    defaultValue,
    onChange: onValueChange,
    onHighlightChange,
    options,
    optionComparer
  } = props;
  const propsRef = React.useRef(props);
  propsRef.current = props;
  const [value, setValueState] = useControlled({
    controlled: controlledValue,
    default: defaultValue,
    name: 'useListbox'
  });
  const previousValueRef = React.useRef(null);
  const [state, dispatch] = React.useReducer(externalReducer ?? internalReducer, {
    highlightedValue: null,
    selectedValue: value
  });
  const optionComparerRef = React.useRef(optionComparer);
  optionComparerRef.current = optionComparer;
  React.useEffect(() => {
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