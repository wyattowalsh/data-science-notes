import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["displayStaticWrapperAs"];
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses, generateUtilityClass, generateUtilityClasses } from '@mui/base';
import { DIALOG_WIDTH } from '../constants/dimensions';
import { WrapperVariantContext, IsStaticVariantContext } from './WrapperVariantContext';
import { jsx as _jsx } from "react/jsx-runtime";
export function getStaticWrapperUtilityClass(slot) {
  return generateUtilityClass('MuiPickerStaticWrapper', slot);
}
export const pickerStaticWrapperClasses = generateUtilityClasses('MuiPickerStaticWrapper', ['root']);

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getStaticWrapperUtilityClass, classes);
};

const PickerStaticWrapperRoot = styled('div', {
  name: 'MuiPickerStaticWrapper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  overflow: 'hidden',
  minWidth: DIALOG_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper
}));

function PickerStaticWrapper(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiPickerStaticWrapper'
  });

  const {
    displayStaticWrapperAs
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const classes = useUtilityClasses(props);
  const isStatic = true;
  return /*#__PURE__*/_jsx(IsStaticVariantContext.Provider, {
    value: isStatic,
    children: /*#__PURE__*/_jsx(WrapperVariantContext.Provider, {
      value: displayStaticWrapperAs,
      children: /*#__PURE__*/_jsx(PickerStaticWrapperRoot, _extends({
        className: classes.root
      }, other))
    })
  });
}

export default PickerStaticWrapper;