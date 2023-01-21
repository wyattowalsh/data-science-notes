"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["component", "components", "componentsProps", "count", "getItemAriaLabel", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "direction", "ownerState"];

var _span, _span2, _span3, _span4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LastPageIconDefault = () => _span || (_span = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  children: '⇾|'
}));

const FirstPageIconDefault = () => _span2 || (_span2 = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  children: '|⇽'
}));

const NextPageIconDefault = () => _span3 || (_span3 = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  children: '⇾'
}));

const BackPageIconDefault = () => _span4 || (_span4 = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  children: '⇽'
}));

function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
/**
 * @ignore - internal component.
 */


const TablePaginationActionsUnstyled = /*#__PURE__*/React.forwardRef(function TablePaginationActionsUnstyled(props, ref) {
  var _ref, _components$Root, _components$FirstButt, _components$LastButto, _components$NextButto, _components$BackButto, _components$LastPageI, _components$FirstPage, _components$NextPageI, _components$BackPageI;

  const {
    component,
    components = {},
    componentsProps = {},
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton = false,
    showLastButton = false,
    direction
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const Root = (_ref = (_components$Root = components.Root) != null ? _components$Root : component) != null ? _ref : 'div';
  const rootProps = (0, _utils.appendOwnerState)(Root, (0, _extends2.default)({}, other, componentsProps.root), ownerState);
  const FirstButton = (_components$FirstButt = components.FirstButton) != null ? _components$FirstButt : 'button';
  const firstButtonProps = (0, _utils.appendOwnerState)(FirstButton, componentsProps.firstButton, ownerState);
  const LastButton = (_components$LastButto = components.LastButton) != null ? _components$LastButto : 'button';
  const lastButtonProps = (0, _utils.appendOwnerState)(LastButton, componentsProps.lastButton, ownerState);
  const NextButton = (_components$NextButto = components.NextButton) != null ? _components$NextButto : 'button';
  const nextButtonProps = (0, _utils.appendOwnerState)(NextButton, componentsProps.nextButton, ownerState);
  const BackButton = (_components$BackButto = components.BackButton) != null ? _components$BackButto : 'button';
  const backButtonProps = (0, _utils.appendOwnerState)(BackButton, componentsProps.backButton, ownerState);
  const LastPageIcon = (_components$LastPageI = components.LastPageIcon) != null ? _components$LastPageI : LastPageIconDefault;
  const FirstPageIcon = (_components$FirstPage = components.FirstPageIcon) != null ? _components$FirstPage : FirstPageIconDefault;
  const NextPageIcon = (_components$NextPageI = components.NextPageIcon) != null ? _components$NextPageI : NextPageIconDefault;
  const BackPageIcon = (_components$BackPageI = components.BackPageIcon) != null ? _components$BackPageI : BackPageIconDefault;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({
    ref: ref
  }, rootProps, {
    children: [showFirstButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(FirstButton, (0, _extends2.default)({
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel('first', page),
      title: getItemAriaLabel('first', page)
    }, firstButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(LastPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(FirstPageIcon, {})
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(BackButton, (0, _extends2.default)({
      onClick: handleBackButtonClick,
      disabled: page === 0,
      color: "inherit",
      "aria-label": getItemAriaLabel('previous', page),
      title: getItemAriaLabel('previous', page)
    }, backButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(NextPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(BackPageIcon, {})
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(NextButton, (0, _extends2.default)({
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      color: "inherit",
      "aria-label": getItemAriaLabel('next', page),
      title: getItemAriaLabel('next', page)
    }, nextButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(BackPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(NextPageIcon, {})
    })), showLastButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(LastButton, (0, _extends2.default)({
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel('last', page),
      title: getItemAriaLabel('last', page)
    }, lastButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(FirstPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(LastPageIcon, {})
    }))]
  }));
});
var _default = TablePaginationActionsUnstyled;
exports.default = _default;