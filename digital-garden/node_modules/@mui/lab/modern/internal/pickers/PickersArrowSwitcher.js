import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["children", "className", "components", "componentsProps", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonText", "onLeftClick", "onRightClick", "rightArrowButtonText"];
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '../svg-icons/ArrowLeft';
import ArrowRightIcon from '../svg-icons/ArrowRight';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const PickersArrowSwitcherRoot = styled('div')({
  display: 'flex'
});
const PickersArrowSwitcherSpacer = styled('div')(({
  theme
}) => ({
  width: theme.spacing(3)
}));
const PickersArrowSwitcherButton = styled(IconButton)(({
  ownerState
}) => _extends({}, ownerState.hidden && {
  visibility: 'hidden'
}));
const PickersArrowSwitcher = /*#__PURE__*/React.forwardRef(function PickersArrowSwitcher(props, ref) {
  const {
    children,
    className,
    components = {},
    componentsProps = {},
    isLeftDisabled,
    isLeftHidden,
    isRightDisabled,
    isRightHidden,
    leftArrowButtonText,
    onLeftClick,
    onRightClick,
    rightArrowButtonText
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const leftArrowButtonProps = componentsProps.leftArrowButton || {};
  const LeftArrowIcon = components.LeftArrowIcon || ArrowLeftIcon;
  const rightArrowButtonProps = componentsProps.rightArrowButton || {};
  const RightArrowIcon = components.RightArrowIcon || ArrowRightIcon;
  const ownerState = props;
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