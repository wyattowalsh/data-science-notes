import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { unstable_useForkRef as useForkRef, unstable_useId as useId } from '@mui/utils';
import { ActionTypes } from './useListbox.types';
import defaultReducer from './defaultListboxReducer';
import useControllableReducer from './useControllableReducer';
import areArraysEqual from '../utils/areArraysEqual';

var defaultOptionComparer = function defaultOptionComparer(optionA, optionB) {
  return optionA === optionB;
};

var defaultIsOptionDisabled = function defaultIsOptionDisabled() {
  return false;
};

export default function useListbox(props) {
  var _props$optionIdGenera, _options$highlightedI;

  var _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$focusManagemen = props.focusManagement,
      focusManagement = _props$focusManagemen === void 0 ? 'activeDescendant' : _props$focusManagemen,
      idProp = props.id,
      _props$isOptionDisabl = props.isOptionDisabled,
      isOptionDisabled = _props$isOptionDisabl === void 0 ? defaultIsOptionDisabled : _props$isOptionDisabl,
      externalListboxRef = props.listboxRef,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$optionComparer = props.optionComparer,
      optionComparer = _props$optionComparer === void 0 ? defaultOptionComparer : _props$optionComparer,
      options = props.options,
      externalReducer = props.stateReducer;
  var id = useId(idProp);

  function defaultIdGenerator(_, index) {
    return "".concat(id, "-option-").concat(index);
  }

  var optionIdGenerator = (_props$optionIdGenera = props.optionIdGenerator) != null ? _props$optionIdGenera : defaultIdGenerator;

  var propsWithDefaults = _extends({}, props, {
    disabledItemsFocusable: disabledItemsFocusable,
    disableListWrap: disableListWrap,
    focusManagement: focusManagement,
    isOptionDisabled: isOptionDisabled,
    multiple: multiple,
    optionComparer: optionComparer
  });

  var listboxRef = React.useRef(null);
  var handleRef = useForkRef(externalListboxRef, listboxRef);

  var _useControllableReduc = useControllableReducer(defaultReducer, externalReducer, propsWithDefaults),
      _useControllableReduc2 = _slicedToArray(_useControllableReduc, 2),
      _useControllableReduc3 = _useControllableReduc2[0],
      highlightedValue = _useControllableReduc3.highlightedValue,
      selectedValue = _useControllableReduc3.selectedValue,
      dispatch = _useControllableReduc2[1];

  var highlightedIndex = React.useMemo(function () {
    return highlightedValue == null ? -1 : options.findIndex(function (option) {
      return optionComparer(option, highlightedValue);
    });
  }, [highlightedValue, options, optionComparer]);
  var previousOptions = React.useRef([]);
  React.useEffect(function () {
    if (areArraysEqual(previousOptions.current, options, optionComparer)) {
      return;
    }

    dispatch({
      type: ActionTypes.optionsChange,
      options: options,
      previousOptions: previousOptions.current,
      props: propsWithDefaults
    });
    previousOptions.current = options; // No need to re-run this effect if props change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, optionComparer, dispatch]);
  var setSelectedValue = React.useCallback(function (option) {
    dispatch({
      type: ActionTypes.setValue,
      value: option
    });
  }, [dispatch]);
  var setHighlightedValue = React.useCallback(function (option) {
    dispatch({
      type: ActionTypes.setHighlight,
      highlight: option
    });
  }, [dispatch]);

  var createHandleOptionClick = function createHandleOptionClick(option, other) {
    return function (event) {
      var _other$onClick;

      (_other$onClick = other.onClick) == null ? void 0 : _other$onClick.call(other, event);

      if (event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      dispatch({
        type: ActionTypes.optionClick,
        option: option,
        event: event,
        props: propsWithDefaults
      });
    };
  };

  var createHandleOptionMouseOver = function createHandleOptionMouseOver(option, other) {
    return function (event) {
      var _other$onMouseOver;

      (_other$onMouseOver = other.onMouseOver) == null ? void 0 : _other$onMouseOver.call(other, event);

      if (event.defaultPrevented) {
        return;
      }

      dispatch({
        type: ActionTypes.optionHover,
        option: option,
        event: event,
        props: propsWithDefaults
      });
    };
  };

  var createHandleKeyDown = function createHandleKeyDown(other) {
    return function (event) {
      var _other$onKeyDown;

      (_other$onKeyDown = other.onKeyDown) == null ? void 0 : _other$onKeyDown.call(other, event);

      if (event.defaultPrevented) {
        return;
      }

      var keysToPreventDefault = [' ', 'Enter', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'];

      if (keysToPreventDefault.includes(event.key)) {
        event.preventDefault();
      }

      dispatch({
        type: ActionTypes.keyDown,
        event: event,
        props: propsWithDefaults
      });
    };
  };

  var createHandleBlur = function createHandleBlur(other) {
    return function (event) {
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
        event: event,
        props: propsWithDefaults
      });
    };
  };

  var getRootProps = function getRootProps() {
    var otherHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _extends({}, otherHandlers, {
      'aria-activedescendant': focusManagement === 'activeDescendant' && highlightedValue != null ? optionIdGenerator(highlightedValue, highlightedIndex) : undefined,
      id: id,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      role: 'listbox',
      tabIndex: focusManagement === 'DOM' ? -1 : 0,
      ref: handleRef
    });
  };

  var getOptionState = function getOptionState(option) {
    var selected;
    var index = options.findIndex(function (opt) {
      return optionComparer(opt, option);
    });

    if (multiple) {
      var _ref;

      selected = ((_ref = selectedValue) != null ? _ref : []).some(function (value) {
        return value != null && optionComparer(option, value);
      });
    } else {
      selected = optionComparer(option, selectedValue);
    }

    var disabled = isOptionDisabled(option, index);
    return {
      selected: selected,
      disabled: disabled,
      highlighted: highlightedIndex === index
    };
  };

  var getOptionTabIndex = function getOptionTabIndex(optionState) {
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

  var getOptionProps = function getOptionProps(option) {
    var otherHandlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var optionState = getOptionState(option);
    var index = options.findIndex(function (opt) {
      return optionComparer(opt, option);
    });
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
    getRootProps: getRootProps,
    getOptionProps: getOptionProps,
    getOptionState: getOptionState,
    highlightedOption: (_options$highlightedI = options[highlightedIndex]) != null ? _options$highlightedI : null,
    selectedOption: selectedValue,
    setSelectedValue: setSelectedValue,
    setHighlightedValue: setHighlightedValue
  };
}