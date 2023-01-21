import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["disabled", "onSelect", "selected", "value"];
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/base';
import { onSpaceOrEnter } from '../internal/pickers/utils';
import { jsx as _jsx } from "react/jsx-runtime";
const classes = generateUtilityClasses('PrivatePickersMonth', ['root', 'selected']);
const PickersMonthRoot = styled(Typography)(({
  theme
}) => _extends({
  flex: '1 0 33.33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: '8px 0',
  height: 36,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus, &:hover': {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:disabled': {
    pointerEvents: 'none',
    color: theme.palette.text.secondary
  },
  [`&.${classes.selected}`]: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  }
}));
/**
 * @ignore - do not document.
 */

const PickersMonth = props => {
  const {
    disabled,
    onSelect,
    selected,
    value
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const handleSelection = () => {
    onSelect(value);
  };

  return /*#__PURE__*/_jsx(PickersMonthRoot, _extends({
    component: "button",
    className: clsx(classes.root, selected && classes.selected),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyDown: onSpaceOrEnter(handleSelection),
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    disabled: disabled
  }, other));
};

export default PickersMonth;