import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _styled;

import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { DIALOG_WIDTH } from './constants/dimensions';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var PickersModalDialogRoot = styled(Dialog)((_styled = {}, _defineProperty(_styled, "& .".concat(dialogClasses.container), {
  outline: 0
}), _defineProperty(_styled, "& .".concat(dialogClasses.paper), {
  outline: 0,
  minWidth: DIALOG_WIDTH
}), _styled));
var PickersModalDialogContent = styled(DialogContent)({
  '&:first-of-type': {
    padding: 0
  }
});
var PickersModalDialogActions = styled(DialogActions)(function (_ref) {
  var ownerState = _ref.ownerState;
  return _extends({}, (ownerState.clearable || ownerState.showTodayButton) && {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/mui/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-of-type': {
      marginRight: 'auto'
    }
  });
});

var PickersModalDialog = function PickersModalDialog(props) {
  var _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? 'Cancel' : _props$cancelText,
      children = props.children,
      _props$clearable = props.clearable,
      clearable = _props$clearable === void 0 ? false : _props$clearable,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$DialogProps = props.DialogProps,
      DialogProps = _props$DialogProps === void 0 ? {} : _props$DialogProps,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? 'OK' : _props$okText,
      onAccept = props.onAccept,
      onClear = props.onClear,
      onDismiss = props.onDismiss,
      onSetToday = props.onSetToday,
      open = props.open,
      _props$showTodayButto = props.showTodayButton,
      showTodayButton = _props$showTodayButto === void 0 ? false : _props$showTodayButto,
      _props$todayText = props.todayText,
      todayText = _props$todayText === void 0 ? 'Today' : _props$todayText;
  var ownerState = props;
  return /*#__PURE__*/_jsxs(PickersModalDialogRoot, _extends({
    open: open,
    onClose: onDismiss
  }, DialogProps, {
    children: [/*#__PURE__*/_jsx(PickersModalDialogContent, {
      children: children
    }), /*#__PURE__*/_jsxs(PickersModalDialogActions, {
      ownerState: ownerState,
      children: [clearable && /*#__PURE__*/_jsx(Button, {
        onClick: onClear,
        children: clearText
      }), showTodayButton && /*#__PURE__*/_jsx(Button, {
        onClick: onSetToday,
        children: todayText
      }), cancelText && /*#__PURE__*/_jsx(Button, {
        onClick: onDismiss,
        children: cancelText
      }), okText && /*#__PURE__*/_jsx(Button, {
        onClick: onAccept,
        children: okText
      })]
    })]
  }));
};

export default PickersModalDialog;