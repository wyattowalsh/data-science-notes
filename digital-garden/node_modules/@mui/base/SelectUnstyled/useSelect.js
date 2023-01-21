import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { unstable_useControlled as useControlled, unstable_useForkRef as useForkRef } from '@mui/utils';
import { useButton } from '../ButtonUnstyled';
import { useListbox, defaultListboxReducer, ActionTypes } from '../ListboxUnstyled';

function useSelect(props) {
  const {
    buttonComponent,
    buttonRef: buttonRefProp,
    defaultValue,
    disabled = false,
    listboxId,
    listboxRef: listboxRefProp,
    multiple = false,
    onChange,
    onOpenChange,
    open = false,
    options,
    value: valueProp
  } = props;
  const buttonRef = React.useRef(null);
  const handleButtonRef = useForkRef(buttonRefProp, buttonRef);
  const listboxRef = React.useRef(null);
  const intermediaryListboxRef = useForkRef(listboxRefProp, listboxRef);
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'SelectUnstyled',
    state: 'value'
  }); // prevents closing the listbox on keyUp right after opening it

  const ignoreEnterKeyUp = React.useRef(false); // prevents reopening the listbox when button is clicked
  // (listbox closes on lost focus, then immediately reopens on click)

  const ignoreClick = React.useRef(false); // Ensure the listbox is focused after opening

  const [listboxFocusRequested, requestListboxFocus] = React.useState(false);
  const focusListboxIfRequested = React.useCallback(() => {
    if (listboxFocusRequested && listboxRef.current != null) {
      listboxRef.current.focus();
      requestListboxFocus(false);
    }
  }, [listboxFocusRequested]);

  const updateListboxRef = listboxElement => {
    listboxRef.current = listboxElement;
    focusListboxIfRequested();
  };

  const handleListboxRef = useForkRef(intermediaryListboxRef, updateListboxRef);
  React.useEffect(() => {
    focusListboxIfRequested();
  }, [focusListboxIfRequested]);
  React.useEffect(() => {
    requestListboxFocus(open);
  }, [open]);

  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous;

    otherHandlers == null ? void 0 : (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);

    if (!event.defaultPrevented && open) {
      ignoreClick.current = true;
    }
  };

  const createHandleButtonClick = otherHandlers => event => {
    var _otherHandlers$onClic;

    otherHandlers == null ? void 0 : (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);

    if (!event.defaultPrevented && !ignoreClick.current) {
      onOpenChange == null ? void 0 : onOpenChange(!open);
    }

    ignoreClick.current = false;
  };

  const createHandleButtonKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;

    otherHandlers == null ? void 0 : (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter') {
      ignoreEnterKeyUp.current = true;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      onOpenChange == null ? void 0 : onOpenChange(true);
    }
  };

  const createHandleListboxKeyUp = otherHandlers => event => {
    var _otherHandlers$onKeyU;

    otherHandlers == null ? void 0 : (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    const closingKeys = multiple ? ['Escape'] : ['Escape', 'Enter', ' '];

    if (open && !ignoreEnterKeyUp.current && closingKeys.includes(event.key)) {
      var _buttonRef$current;

      buttonRef == null ? void 0 : (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.focus();
    }

    ignoreEnterKeyUp.current = false;
  };

  const createHandleListboxItemClick = otherHandlers => event => {
    var _otherHandlers$onClic2;

    otherHandlers == null ? void 0 : (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (!multiple) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };

  const createHandleListboxBlur = otherHandlers => event => {
    var _otherHandlers$blur;

    otherHandlers == null ? void 0 : (_otherHandlers$blur = otherHandlers.blur) == null ? void 0 : _otherHandlers$blur.call(otherHandlers, event);

    if (!event.defaultPrevented) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };

  const listboxReducer = (state, action) => {
    const newState = defaultListboxReducer(state, action); // change selection when listbox is closed

    if (action.type === ActionTypes.keyDown && !open && (action.event.key === 'ArrowUp' || action.event.key === 'ArrowDown')) {
      return _extends({}, newState, {
        selectedValue: newState.highlightedValue
      });
    }

    if (action.type === ActionTypes.blur || action.type === ActionTypes.setValue || action.type === ActionTypes.optionsChange) {
      return _extends({}, newState, {
        highlightedValue: newState.selectedValue
      });
    }

    return newState;
  };

  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible
  } = useButton({
    component: buttonComponent,
    disabled,
    ref: handleButtonRef
  });
  const selectedOption = React.useMemo(() => {
    var _props$options$find;

    return props.multiple ? props.options.filter(o => value.includes(o.value)) : (_props$options$find = props.options.find(o => o.value === value)) != null ? _props$options$find : null;
  }, [props.multiple, props.options, value]);
  let useListboxParameters;

  if (props.multiple) {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: o => {
        var _o$disabled;

        return (_o$disabled = o == null ? void 0 : o.disabled) != null ? _o$disabled : false;
      },
      optionComparer: (o, v) => (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: true,
      onChange: newOptions => {
        setValue(newOptions.map(o => o.value));
        onChange == null ? void 0 : onChange(newOptions.map(o => o.value));
      },
      options,
      value: selectedOption
    };
  } else {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: o => {
        var _o$disabled2;

        return (_o$disabled2 = o == null ? void 0 : o.disabled) != null ? _o$disabled2 : false;
      },
      optionComparer: (o, v) => (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: false,
      onChange: option => {
        var _option$value, _option$value2;

        setValue((_option$value = option == null ? void 0 : option.value) != null ? _option$value : null);
        onChange == null ? void 0 : onChange((_option$value2 = option == null ? void 0 : option.value) != null ? _option$value2 : null);
      },
      options,
      stateReducer: listboxReducer,
      value: selectedOption
    };
  }

  const {
    getRootProps: getListboxRootProps,
    getOptionProps: getListboxOptionProps,
    getOptionState,
    highlightedOption,
    selectedOption: listboxSelectedOption
  } = useListbox(useListboxParameters);

  const getButtonProps = (otherHandlers = {}) => {
    return _extends({}, getButtonRootProps(_extends({}, otherHandlers, {
      onClick: createHandleButtonClick(otherHandlers),
      onMouseDown: createHandleMouseDown(otherHandlers),
      onKeyDown: createHandleButtonKeyDown(otherHandlers)
    })), {
      'aria-expanded': open,
      'aria-haspopup': 'listbox'
    });
  };

  const getListboxProps = (otherHandlers = {}) => getListboxRootProps(_extends({}, otherHandlers, {
    onBlur: createHandleListboxBlur(otherHandlers),
    onKeyUp: createHandleListboxKeyUp(otherHandlers)
  }));

  const getOptionProps = (option, otherHandlers = {}) => {
    return getListboxOptionProps(option, _extends({}, otherHandlers, {
      onClick: createHandleListboxItemClick(otherHandlers)
    }));
  };

  React.useDebugValue({
    selectedOption: listboxSelectedOption,
    open,
    highlightedOption
  });
  return {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    open,
    value
  };
}

export default useSelect;