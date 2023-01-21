import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["component", "components", "componentsProps", "count", "getItemAriaLabel", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "direction", "ownerState"];

var _span, _span2, _span3, _span4;

import * as React from 'react';
import { appendOwnerState } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const LastPageIconDefault = () => _span || (_span = /*#__PURE__*/_jsx("span", {
  children: '⇾|'
}));

const FirstPageIconDefault = () => _span2 || (_span2 = /*#__PURE__*/_jsx("span", {
  children: '|⇽'
}));

const NextPageIconDefault = () => _span3 || (_span3 = /*#__PURE__*/_jsx("span", {
  children: '⇾'
}));

const BackPageIconDefault = () => _span4 || (_span4 = /*#__PURE__*/_jsx("span", {
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
        other = _objectWithoutPropertiesLoose(props, _excluded);

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
  const rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  const FirstButton = (_components$FirstButt = components.FirstButton) != null ? _components$FirstButt : 'button';
  const firstButtonProps = appendOwnerState(FirstButton, componentsProps.firstButton, ownerState);
  const LastButton = (_components$LastButto = components.LastButton) != null ? _components$LastButto : 'button';
  const lastButtonProps = appendOwnerState(LastButton, componentsProps.lastButton, ownerState);
  const NextButton = (_components$NextButto = components.NextButton) != null ? _components$NextButto : 'button';
  const nextButtonProps = appendOwnerState(NextButton, componentsProps.nextButton, ownerState);
  const BackButton = (_components$BackButto = components.BackButton) != null ? _components$BackButto : 'button';
  const backButtonProps = appendOwnerState(BackButton, componentsProps.backButton, ownerState);
  const LastPageIcon = (_components$LastPageI = components.LastPageIcon) != null ? _components$LastPageI : LastPageIconDefault;
  const FirstPageIcon = (_components$FirstPage = components.FirstPageIcon) != null ? _components$FirstPage : FirstPageIconDefault;
  const NextPageIcon = (_components$NextPageI = components.NextPageIcon) != null ? _components$NextPageI : NextPageIconDefault;
  const BackPageIcon = (_components$BackPageI = components.BackPageIcon) != null ? _components$BackPageI : BackPageIconDefault;
  return /*#__PURE__*/_jsxs(Root, _extends({
    ref: ref
  }, rootProps, {
    children: [showFirstButton && /*#__PURE__*/_jsx(FirstButton, _extends({
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel('first', page),
      title: getItemAriaLabel('first', page)
    }, firstButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(LastPageIcon, {}) : /*#__PURE__*/_jsx(FirstPageIcon, {})
    })), /*#__PURE__*/_jsx(BackButton, _extends({
      onClick: handleBackButtonClick,
      disabled: page === 0,
      color: "inherit",
      "aria-label": getItemAriaLabel('previous', page),
      title: getItemAriaLabel('previous', page)
    }, backButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(NextPageIcon, {}) : /*#__PURE__*/_jsx(BackPageIcon, {})
    })), /*#__PURE__*/_jsx(NextButton, _extends({
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      color: "inherit",
      "aria-label": getItemAriaLabel('next', page),
      title: getItemAriaLabel('next', page)
    }, nextButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(BackPageIcon, {}) : /*#__PURE__*/_jsx(NextPageIcon, {})
    })), showLastButton && /*#__PURE__*/_jsx(LastButton, _extends({
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel('last', page),
      title: getItemAriaLabel('last', page)
    }, lastButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/_jsx(FirstPageIcon, {}) : /*#__PURE__*/_jsx(LastPageIcon, {})
    }))]
  }));
});
export default TablePaginationActionsUnstyled;