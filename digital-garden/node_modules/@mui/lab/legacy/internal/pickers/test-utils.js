import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import * as React from 'react';
import { parseISO } from 'date-fns';
import { createRenderer, fireEvent, screen } from 'test/utils';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider'; // TODO make possible to pass here any utils using cli

/**
 * Wrapper around `@date-io/date-fns` that resolves https://github.com/dmtrKovalenko/date-io/issues/479.
 * We're not using `adapter.date` in the implementation which means the implementation is safe.
 * But we do use it in tests where usage of ISO dates without timezone is problematic
 */

import { jsx as _jsx } from "react/jsx-runtime";
export var AdapterClassToUse = /*#__PURE__*/function (_AdapterDateFns) {
  _inherits(AdapterClassToUse, _AdapterDateFns);

  var _super = _createSuper(AdapterClassToUse);

  function AdapterClassToUse() {
    var _this;

    _classCallCheck(this, AdapterClassToUse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.date = function (value) {
      if (typeof value === 'string') {
        return parseISO(value);
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

    return _this;
  }

  return _createClass(AdapterClassToUse);
}(AdapterDateFns);
export var adapterToUse = new AdapterClassToUse();
export var FakeTransitionComponent = /*#__PURE__*/React.forwardRef(function FakeTransitionComponent(_ref, ref) {
  var children = _ref.children;
  // set tabIndex in case it is used as a child of <TrapFocus />
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    tabIndex: -1,
    children: children
  });
});
export function wrapPickerMount(mount) {
  return function (node) {
    return mount( /*#__PURE__*/_jsx(LocalizationProvider, {
      dateAdapter: AdapterClassToUse,
      children: node
    }));
  };
}
export function createPickerRenderer() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var locale = _ref2.locale,
      createRendererOptions = _objectWithoutProperties(_ref2, ["locale"]);

  var _createRenderer = createRenderer(createRendererOptions),
      clock = _createRenderer.clock,
      clientRender = _createRenderer.render;

  function Wrapper(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/_jsx(LocalizationProvider, {
      locale: locale,
      dateAdapter: AdapterClassToUse,
      children: children
    });
  }

  return {
    clock: clock,
    render: function render(node, options) {
      return clientRender(node, _extends({}, options, {
        wrapper: Wrapper
      }));
    }
  };
}
export function openMobilePicker() {
  fireEvent.click(screen.getByRole('textbox'));
}