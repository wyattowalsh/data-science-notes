import * as React from 'react';
import clsx from 'clsx';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/base';
import { TransitionGroup } from 'react-transition-group';
import { jsx as _jsx } from "react/jsx-runtime";
const classes = generateUtilityClasses('PrivatePickersFadeTransitionGroup', ['root']);
const animationDuration = 500;
const PickersFadeTransitionGroupRoot = styled(TransitionGroup)({
  display: 'block',
  position: 'relative'
});
/**
 * @ignore - do not document.
 */

const PickersFadeTransitionGroup = ({
  children,
  className,
  reduceAnimations,
  transKey
}) => {
  if (reduceAnimations) {
    return children;
  }

  return /*#__PURE__*/_jsx(PickersFadeTransitionGroupRoot, {
    className: clsx(classes.root, className),
    children: /*#__PURE__*/_jsx(Fade, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: animationDuration,
        enter: animationDuration / 2,
        exit: 0
      },
      children: children
    }, transKey)
  });
};

export default PickersFadeTransitionGroup;