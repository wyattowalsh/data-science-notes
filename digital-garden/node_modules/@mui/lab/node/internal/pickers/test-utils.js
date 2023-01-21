"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterToUse = exports.FakeTransitionComponent = exports.AdapterClassToUse = void 0;
exports.createPickerRenderer = createPickerRenderer;
exports.openMobilePicker = openMobilePicker;
exports.wrapPickerMount = wrapPickerMount;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _dateFns = require("date-fns");

var _utils = require("test/utils");

var _AdapterDateFns = _interopRequireDefault(require("@mui/lab/AdapterDateFns"));

var _LocalizationProvider = _interopRequireDefault(require("@mui/lab/LocalizationProvider"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["locale"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TODO make possible to pass here any utils using cli

/**
 * Wrapper around `@date-io/date-fns` that resolves https://github.com/dmtrKovalenko/date-io/issues/479.
 * We're not using `adapter.date` in the implementation which means the implementation is safe.
 * But we do use it in tests where usage of ISO dates without timezone is problematic
 */
class AdapterClassToUse extends _AdapterDateFns.default {
  constructor(...args) {
    super(...args);

    this.date = value => {
      if (typeof value === 'string') {
        return (0, _dateFns.parseISO)(value);
      }

      if (typeof value === 'undefined') {
        return new Date();
      }

      if (value === null) {
        // @ts-expect-error AdapterDateFns#date says it returns NotNullable but that's not true
        return null;
      }

      return new Date(value);
    };
  }

}

exports.AdapterClassToUse = AdapterClassToUse;
const adapterToUse = new AdapterClassToUse();
exports.adapterToUse = adapterToUse;
const FakeTransitionComponent = /*#__PURE__*/React.forwardRef(function FakeTransitionComponent({
  children
}, ref) {
  // set tabIndex in case it is used as a child of <TrapFocus />
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    tabIndex: -1,
    children: children
  });
});
exports.FakeTransitionComponent = FakeTransitionComponent;

function wrapPickerMount(mount) {
  return node => mount( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocalizationProvider.default, {
    dateAdapter: AdapterClassToUse,
    children: node
  }));
}

function createPickerRenderer(_ref = {}) {
  let {
    locale
  } = _ref,
      createRendererOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const {
    clock,
    render: clientRender
  } = (0, _utils.createRenderer)(createRendererOptions);

  function Wrapper({
    children
  }) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocalizationProvider.default, {
      locale: locale,
      dateAdapter: AdapterClassToUse,
      children: children
    });
  }

  return {
    clock,

    render(node, options) {
      return clientRender(node, (0, _extends2.default)({}, options, {
        wrapper: Wrapper
      }));
    }

  };
}

function openMobilePicker() {
  _utils.fireEvent.click(_utils.screen.getByRole('textbox'));
}