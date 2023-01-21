import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '../svg-icons/ArrowLeft';
import ArrowRightIcon from '../svg-icons/ArrowRight';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var PickersArrowSwitcherRoot = styled('div')({
  display: 'flex'
});
var PickersArrowSwitcherSpacer = styled('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    width: theme.spacing(3)
  };
});
var PickersArrowSwitcherButton = styled(IconButton)(function (_ref2) {
  var ownerState = _ref2.ownerState;
  return _extends({}, ownerState.hidden && {
    visibility: 'hidden'
  });
});
var PickersArrowSwitcher = /*#__PURE__*/React.forwardRef(function PickersArrowSwitcher(props, ref) {
  var children = props.children,
      className = props.className,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      isLeftDisabled = props.isLeftDisabled,
      isLeftHidden = props.isLeftHidden,
      isRightDisabled = props.isRightDisabled,
      isRightHidden = props.isRightHidden,
      leftArrowButtonText = props.leftArrowButtonText,
      onLeftClick = props.onLeftClick,
      onRightClick = props.onRightClick,
      rightArrowButtonText = props.rightArrowButtonText,
      other = _objectWithoutProperties(props, ["children", "className", "components", "componentsProps", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonText", "onLeftClick", "onRightClick", "rightArrowButtonText"]);

  var theme = useTheme();
  var isRtl = theme.direction === 'rtl';
  var leftArrowButtonProps = componentsProps.leftArrowButton || {};
  var LeftArrowIcon = components.LeftArrowIcon || ArrowLeftIcon;
  var rightArrowButtonProps = componentsProps.rightArrowButton || {};
  var RightArrowIcon = components.RightArrowIcon || ArrowRightIcon;
  var ownerState = props;
  return /*#__PURE__*/_jsxs(PickersArrowSwitcherRoot, _extends({
    ref: ref,
    className: className,
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/_jsx(PickersArrowSwitcherButton, _extends({
      as: components.LeftArrowButton,
      size: "small",
      "aria-label": leftArrowButtonText,
      title: leftArrowButtonText,
      disabled: isLeftDisabled,
      edge: "end",
      onClick: onLeftClick
    }, leftArrowButtonProps, {
      className: leftArrowButtonProps.className,
      ownerState: _extends({}, ownerState, leftArrowButtonProps, {
        hidden: isLeftHidden
      }),
      children: isRtl ? /*#__PURE__*/_jsx(RightArrowIcon, {}) : /*#__PURE__*/_jsx(LeftArrowIcon, {})
    })), children ? /*#__PURE__*/_jsx(Typography, {
      variant: "subtitle1",
      component: "span",
      children: children
    }) : /*#__PURE__*/_jsx(PickersArrowSwitcherSpacer, {
      ownerState: ownerState
    }), /*#__PURE__*/_jsx(PickersArrowSwitcherButton, _extends({
      as: components.RightArrowButton,
      size: "small",
      "aria-label": rightArrowButtonText,
      title: rightArrowButtonText,
      edge: "start",
      disabled: isRightDisabled,
      onClick: onRightClick
    }, rightArrowButtonProps, {
      className: rightArrowButtonProps.className,
      ownerState: _extends({}, ownerState, rightArrowButtonProps, {
        hidden: isRightHidden
      }),
      children: isRtl ? /*#__PURE__*/_jsx(LeftArrowIcon, {}) : /*#__PURE__*/_jsx(RightArrowIcon, {})
    }))]
  }));
});
export default PickersArrowSwitcher;