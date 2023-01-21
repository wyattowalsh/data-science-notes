import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses, generateUtilityClass, generateUtilityClasses } from '@mui/base';
import { DIALOG_WIDTH } from '../constants/dimensions';
import { WrapperVariantContext, IsStaticVariantContext } from './WrapperVariantContext';
import { jsx as _jsx } from "react/jsx-runtime";
export function getStaticWrapperUtilityClass(slot) {
  return generateUtilityClass('MuiPickerStaticWrapper', slot);
}
export var pickerStaticWrapperClasses = generateUtilityClasses('MuiPickerStaticWrapper', ['root']);

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getStaticWrapperUtilityClass, classes);
};

var PickerStaticWrapperRoot = styled('div', {
  name: 'MuiPickerStaticWrapper',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})(function (_ref) {
  var theme = _ref.theme;
  return {
    overflow: 'hidden',
    minWidth: DIALOG_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper
  };
});

function PickerStaticWrapper(inProps) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiPickerStaticWrapper'
  });

  var displayStaticWrapperAs = props.displayStaticWrapperAs,
      other = _objectWithoutProperties(props, ["displayStaticWrapperAs"]);

  var classes = useUtilityClasses(props);
  var isStatic = true;
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