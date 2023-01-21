"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _appendOwnerState = _interopRequireDefault(require("../utils/appendOwnerState"));

var _isHostComponent = _interopRequireDefault(require("../utils/isHostComponent"));

var _inputUnstyledClasses = _interopRequireDefault(require("./inputUnstyledClasses"));

var _useInput = _interopRequireDefault(require("./useInput"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "component", "components", "componentsProps", "defaultValue", "disabled", "endAdornment", "error", "id", "maxRows", "minRows", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "rows", "type", "startAdornment", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * Demos:
 *
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [InputUnstyled API](https://mui.com/api/input-unstyled/)
 */
const InputUnstyled = /*#__PURE__*/React.forwardRef(function InputUnstyled(props, ref) {
  var _componentsProps$inpu, _ref, _componentsProps$root, _components$Input, _componentsProps$inpu2;

  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    maxRows,
    minRows,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    rows,
    type = 'text',
    startAdornment,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = (0, _useInput.default)({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  }, (_componentsProps$inpu = componentsProps.input) == null ? void 0 : _componentsProps$inpu.ref);
  const ownerState = (0, _extends2.default)({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });
  const rootStateClasses = (0, _clsx.default)(disabledState && _inputUnstyledClasses.default.disabled, errorState && _inputUnstyledClasses.default.error, focused && _inputUnstyledClasses.default.focused, Boolean(formControlContext) && _inputUnstyledClasses.default.formControl, multiline && _inputUnstyledClasses.default.multiline, Boolean(startAdornment) && _inputUnstyledClasses.default.adornedStart, Boolean(endAdornment) && _inputUnstyledClasses.default.adornedEnd);
  const inputStateClasses = (0, _clsx.default)(disabledState && _inputUnstyledClasses.default.disabled, multiline && _inputUnstyledClasses.default.multiline);
  const propsToForward = {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'div';
  const rootProps = (0, _appendOwnerState.default)(Root, (0, _extends2.default)({}, getRootProps((0, _extends2.default)({}, other, componentsProps.root)), {
    className: (0, _clsx.default)(_inputUnstyledClasses.default.root, rootStateClasses, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  let Input = (_components$Input = components.Input) != null ? _components$Input : 'input'; // TODO: type this properly

  let inputProps = (0, _appendOwnerState.default)(Input, (0, _extends2.default)({}, getInputProps((0, _extends2.default)({}, componentsProps.input, propsToForward)), {
    className: (0, _clsx.default)(_inputUnstyledClasses.default.input, inputStateClasses, (_componentsProps$inpu2 = componentsProps.input) == null ? void 0 : _componentsProps$inpu2.className)
  }), ownerState);

  if (multiline) {
    var _components$Textarea, _components$Textarea2;

    const hasHostTexarea = (0, _isHostComponent.default)((_components$Textarea = components.Textarea) != null ? _components$Textarea : 'textarea');

    if (rows) {
      if (process.env.NODE_ENV !== 'production') {
        if (minRows || maxRows) {
          console.warn('MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.');
        }
      }

      inputProps = (0, _extends2.default)({
        type: undefined,
        minRows: hasHostTexarea ? undefined : rows,
        maxRows: hasHostTexarea ? undefined : rows
      }, inputProps);
    } else {
      inputProps = (0, _extends2.default)({
        type: undefined,
        maxRows: hasHostTexarea ? undefined : maxRows,
        minRows: hasHostTexarea ? undefined : minRows
      }, inputProps);
    }

    Input = (_components$Textarea2 = components.Textarea) != null ? _components$Textarea2 : 'textarea';
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    ref: ref,
    children: [startAdornment, /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({}, inputProps)), endAdornment]
  }));
});
process.env.NODE_ENV !== "production" ? InputUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': _propTypes.default.string,

  /**
   * @ignore
   */
  'aria-label': _propTypes.default.string,

  /**
   * @ignore
   */
  'aria-labelledby': _propTypes.default.string,

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * Class name applied to the root element.
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    Input: _propTypes.default.elementType,
    Root: _propTypes.default.elementType,
    Textarea: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  componentsProps: _propTypes.default.shape({
    input: _propTypes.default.object,
    root: _propTypes.default.object
  }),

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: _propTypes.default.any,

  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: _propTypes.default.bool,

  /**
   * Trailing adornment for this input.
   */
  endAdornment: _propTypes.default.node,

  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: _propTypes.default.bool,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: _propTypes.default.number,

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: _propTypes.default.number,

  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: _propTypes.default.bool,

  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.number,

  /**
   * Leading adornment for this input.
   */
  startAdornment: _propTypes.default.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: _propTypes.default.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: _propTypes.default.any
} : void 0;
var _default = InputUnstyled;
exports.default = _default;