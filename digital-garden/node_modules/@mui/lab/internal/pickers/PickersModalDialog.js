import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { DIALOG_WIDTH } from './constants/dimensions';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const PickersModalDialogRoot = styled(Dialog)({
  [`& .${dialogClasses.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
const PickersModalDialogContent = styled(DialogContent)({
  '&:first-of-type': {
    padding: 0
  }
});
const PickersModalDialogActions = styled(DialogActions)(({
  ownerState
}) => _extends({}, (ownerState.clearable || ownerState.showTodayButton) && {
  // set justifyContent to default value to fix IE11 layout bug
  // see https://github.com/mui/material-ui-pickers/pull/267
  justifyContent: 'flex-start',
  '& > *:first-of-type': {
    marginRight: 'auto'
  }
}));

const PickersModalDialog = props => {
  const {
    cancelText = 'Cancel',
    children,
    clearable = false,
    clearText = 'Clear',
    DialogProps = {},
    okText = 'OK',
    onAccept,
    onClear,
    onDismiss,
    onSetToday,
    open,
    showTodayButton = false,
    todayText = 'Today'
  } = props;
  const ownerState = props;
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