import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { useForkRef } from '@mui/material/utils';
import { WrapperVariantContext } from './WrapperVariantContext';
import PickersPopper from '../PickersPopper';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function DesktopWrapper(props) {
  var children = props.children,
      DateInputProps = props.DateInputProps,
      KeyboardDateInputComponent = props.KeyboardDateInputComponent,
      onDismiss = props.onDismiss,
      open = props.open,
      PopperProps = props.PopperProps,
      PaperProps = props.PaperProps,
      TransitionComponent = props.TransitionComponent,
      onClear = props.onClear,
      clearText = props.clearText,
      clearable = props.clearable;
  var ownInputRef = React.useRef(null);
  var inputRef = useForkRef(DateInputProps.inputRef, ownInputRef);
  return /*#__PURE__*/_jsxs(WrapperVariantContext.Provider, {
    value: "desktop",
    children: [/*#__PURE__*/_jsx(KeyboardDateInputComponent, _extends({}, DateInputProps, {
      inputRef: inputRef
    })), /*#__PURE__*/_jsx(PickersPopper, {
      role: "dialog",
      open: open,
      anchorEl: ownInputRef.current,
      TransitionComponent: TransitionComponent,
      PopperProps: PopperProps,
      PaperProps: PaperProps,
      onClose: onDismiss,
      onClear: onClear,
      clearText: clearText,
      clearable: clearable,
      children: children
    })]
  });
}

export default DesktopWrapper;