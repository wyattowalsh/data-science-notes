import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["className", "disabled", "index", "inner", "label", "selected"];
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/base';
import { CLOCK_WIDTH, CLOCK_HOUR_WIDTH } from './shared';
import { jsx as _jsx } from "react/jsx-runtime";
export const classes = generateUtilityClasses('PrivateClockNumber', ['selected', 'disabled']);
const ClockNumberRoot = styled('span')(({
  theme,
  ownerState
}) => _extends({
  height: CLOCK_HOUR_WIDTH,
  width: CLOCK_HOUR_WIDTH,
  position: 'absolute',
  left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '&:focused': {
    backgroundColor: theme.palette.background.paper
  },
  [`&.${classes.selected}`]: {
    color: theme.palette.primary.contrastText
  },
  [`&.${classes.disabled}`]: {
    pointerEvents: 'none',
    color: theme.palette.text.disabled
  }
}, ownerState.inner && _extends({}, theme.typography.body2, {
  color: theme.palette.text.secondary
})));
/**
 * @ignore - internal component.
 */

function ClockNumber(props) {
  const {
    className,
    disabled,
    index,
    inner,
    label,
    selected
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const ownerState = props;
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return /*#__PURE__*/_jsx(ClockNumberRoot, _extends({
    className: clsx(className, selected && classes.selected, disabled && classes.disabled),
    "aria-disabled": disabled ? true : undefined,
    "aria-selected": selected ? true : undefined,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState: ownerState
  }, other, {
    children: label
  }));
}

export default ClockNumber;