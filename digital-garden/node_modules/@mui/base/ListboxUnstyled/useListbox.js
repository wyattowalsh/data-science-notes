import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { unstable_useForkRef as useForkRef, unstable_useId as useId } from '@mui/utils';
import { ActionTypes } from './useListbox.types';
import defaultReducer from './defaultListboxReducer';
import useControllableReducer from './useControllableReducer';
import areArraysEqual from '../utils/areArraysEqual';

const defaultOptionComparer = (optionA, optionB) => optionA === optionB;

const defaultIsOptionDisabled = () => false;

export default function useListbox(props) {
  var _props$optionIdGenera, _options$highlightedI;

  const {
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = 'activeDescendant',
    id: idProp,
    isOptionDisabled = defaultIsOptionDisabled,
    listboxRef: externalListboxRef,
    multiple = false,
    optionComparer = defaultOptionComparer,
    options,
    stateReducer: externalReducer
  } = props;
  const id = useId(idProp);

  function defaultIdGenerator(_, index) {
    return `${id}-option-${index}`;
  }

  const optionIdGenerator = (_props$optionIdGenera = props.optionIdGenerator) != null ? _props$optionIdGenera : defaultIdGenerator;

  const propsWithDefaults = _extends({}, props, {
    disabledItemsFocusable,
    disableListWrap,
    focusManagement,
    isOptionDisabled,
    multiple,
    optionComparer
  });

  const listboxRef = React.useRef(null);
  const handleRef = useForkRef(externalListboxRef, listboxRef);
  const [{
    highlightedValue,
    selectedValue
  }, dispatch] = useControllableReducer(defaultReducer, externalReducer, propsWithDefaults);
  const highlightedIndex = React.useMemo(() => {
    return highlightedValue == null ? -1 : options.findIndex(option => optionComparer(option, highlightedValue));
  }, [highlightedValue, options, optionComparer]);
  const previousOptions = React.useRef([]);
  React.useEffect(() => {
    if (areArraysEqual(previousOptions.current, options, optionComparer)) {
      return;
    }

    dispatch({
      type: ActionTypes.optionsChange,
      options,
      previousOptions: previousOptions.current,
      props: propsWithDefaults
    });
    previousOptions.current = options; // No need to re-run this effect if props change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, optionComparer, dispatch]);
  const setSelectedValue = React.useCallback(option => {
    dispatch({
      type: ActionTypes.setValue,
      value: option
    });
  }, [dispatch]);
  const setHighlightedValue = React.useCallback(option => {
    dispatch({
      type: ActionTypes.setHighlight,
      highlight: option
    });
  }, [dispatch]);

  const createHandleOptionClick = (option, other) => event => {
    var _other$onClick;

    (_other$onClick = other.onClick) == null ? void 0 : _other$onClick.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
    dispatch({
      type: ActionTypes.optionClick,
      option,
      event,
      props: propsWithDefaults
    });
  };

  const createHandleOptionMouseOver = (option, other) => event => {
    var _other$onMouseOver;

    (_other$onMouseOver = other.onMouseOver) == null ? void 0 : _other$onMouseOver.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    dispatch({
      type: ActionTypes.optionHover,
      option,
      event,
      props: propsWithDefaults
    });
  };

  const createHandleKeyDown = other => event => {
    var _other$onKeyDown;

    (_other$onKeyDown = other.onKeyDown) == null ? void 0 : _other$onKeyDown.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    const keysToPreventDefault = [' ', 'Enter', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'];

    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }

    dispatch({
      type: ActionTypes.keyDown,
      event,
      props: propsWithDefaults
    });
  };

  const createHandleBlur = other => event => {
    var _other$onBlur, _listboxRef$current;

    (_other$onBlur = other.onBlur) == null ? void 0 : _other$onBlur.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    if ((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(document.activeElement)) {
      // focus is within the listbox
      return;
    }

    dispatch({
      type: ActionTypes.blur,
      event,
      props: propsWithDefaults
    });
  };

  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      'aria-activedescendant': focusManagement === 'activeDescendant' && highlightedValue != null ? optionIdGenerator(highlightedValue, highlightedIndex) : undefined,
      id,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      role: 'listbox',
      tabIndex: focusManagement === 'DOM' ? -1 : 0,
      ref: handleRef
    });
  };

  const getOptionState = option => {
    let selected;
    const index = options.findIndex(opt => optionComparer(opt, option));

    if (multiple) {
      var _ref;

      selected = ((_ref = selectedValue) != null ? _ref : []).some(value => value != null && optionComparer(option, value));
    } else {
      selected = optionComparer(option, selectedValue);
    }

    const disabled = isOptionDisabled(option, index);
    return {
      selected,
      disabled,
      highlighted: highlightedIndex === index
    };
  };

  const getOptionTabIndex = optionState => {
    if (focusManagement === 'activeDescendant') {
      return undefined;
    }

    if (!optionState.highlighted) {
      return -1;
    }

    if (optionState.disabled && !disabledItemsFocusable) {
      return -1;
    }

    return 0;
  };

  const getOptionProps = (option, otherHandlers = {}) => {
    const optionState = getOptionState(option);
    const index = options.findIndex(opt => optionComparer(opt, option));
    return _extends({}, otherHandlers, {
      'aria-disabled': optionState.disabled || undefined,
      'aria-selected': optionState.selected,
      tabIndex: getOptionTabIndex(optionState),
      id: optionIdGenerator(option, index),
      onClick: createHandleOptionClick(option, otherHandlers),
      onMouseOver: createHandleOptionMouseOver(option, otherHandlers),
      role: 'option'
    });
  };

  React.useDebugValue({
    highlightedOption: options[highlightedIndex],
    selectedOption: selectedValue
  });
  return {
    getRootProps,
    getOptionProps,
    getOptionState,
    highlightedOption: (_options$highlightedI = options[highlightedIndex]) != null ? _options$highlightedI : null,
    selectedOption: selectedValue,
    setSelectedValue,
    setHighlightedValue
  };
}