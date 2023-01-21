"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useControllableReducer;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@mui/utils");

var _useListbox = require("./useListbox.types");

var _areArraysEqual = _interopRequireDefault(require("../utils/areArraysEqual"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      if ((0, _areArraysEqual.default)(state.selectedValue, valueRef.current)) {
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
  React.useEffect(() => {
    var _onHighlightChangeRef;

    // Fire the highlightChange event when reducer returns changed `highlightedIndex`.
    (_onHighlightChangeRef = onHighlightChangeRef.current) == null ? void 0 : _onHighlightChangeRef.call(onHighlightChangeRef, state.highlightedValue);
  }, [state.highlightedValue]);
}

function useControllableReducer(internalReducer, externalReducer, props) {
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
  const [value, setValueState] = (0, _utils.unstable_useControlled)({
    controlled: controlledValue,
    default: defaultValue,
    name: 'useListbox'
  });
  const previousValueRef = React.useRef(null);
  const [state, dispatch] = React.useReducer(externalReducer != null ? externalReducer : internalReducer, {
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

    if (Array.isArray(controlledValue) && Array.isArray(previousValueRef.current) && (0, _areArraysEqual.default)(previousValueRef.current, controlledValue, optionComparerRef.current)) {
      // `value` is an array and it did not change.
      return;
    }

    if (!Array.isArray(controlledValue) && controlledValue != null && previousValueRef.current != null && optionComparerRef.current(controlledValue, previousValueRef.current)) {
      // `value` is a single option and it did not change.
      return;
    }

    previousValueRef.current = controlledValue;
    dispatch({
      type: _useListbox.ActionTypes.setValue,
      value: controlledValue
    });
  }, [controlledValue]);
  useReducerReturnValueHandler(state, value, options, optionComparerRef, setValueState, onValueChange, onHighlightChange);
  return [state, dispatch];
}