import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["autoFocus", "className", "date", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "onViewChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useViews } from '../hooks/useViews';
import ClockPicker from '../../../ClockPicker/ClockPicker';
import CalendarPicker from '../../../CalendarPicker';
import { KeyboardDateInput } from '../KeyboardDateInput';
import { useIsLandscape } from '../hooks/useIsLandscape';
import { WrapperVariantContext } from '../wrappers/WrapperVariantContext';
import PickerView from './PickerView';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const MobileKeyboardInputView = styled('div')({
  padding: '16px 24px'
});
const PickerRoot = styled('div')(({
  ownerState
}) => _extends({
  display: 'flex',
  flexDirection: 'column'
}, ownerState.isLandscape && {
  flexDirection: 'row'
}));
const MobileKeyboardTextFieldProps = {
  fullWidth: true
};

const isDatePickerView = view => view === 'year' || view === 'month' || view === 'day';

const isTimePickerView = view => view === 'hours' || view === 'minutes' || view === 'seconds';

function Picker(props) {
  const {
    autoFocus,
    date,
    DateInputProps,
    isMobileKeyboardViewOpen,
    onDateChange,
    onViewChange,
    openTo,
    orientation,
    showToolbar,
    toggleMobileKeyboardView,
    ToolbarComponent = () => null,
    toolbarFormat,
    toolbarPlaceholder,
    toolbarTitle,
    views
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const isLandscape = useIsLandscape(views, orientation);
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;
  const handleDateChange = React.useCallback((newDate, selectionState) => {
    onDateChange(newDate, wrapperVariant, selectionState);
  }, [onDateChange, wrapperVariant]);
  const handleViewChange = React.useCallback(newView => {
    if (isMobileKeyboardViewOpen) {
      toggleMobileKeyboardView();
    }

    if (onViewChange) {
      onViewChange(newView);
    }
  }, [isMobileKeyboardViewOpen, onViewChange, toggleMobileKeyboardView]);
  const {
    openView,
    nextView,
    previousView,
    setOpenView,
    handleChangeAndOpenNext
  } = useViews({
    view: undefined,
    views,
    openTo,
    onChange: handleDateChange,
    onViewChange: handleViewChange
  });
  return /*#__PURE__*/_jsxs(PickerRoot, {
    ownerState: {
      isLandscape
    },
    children: [toShowToolbar && /*#__PURE__*/_jsx(ToolbarComponent, _extends({}, other, {
      views: views,
      isLandscape: isLandscape,
      date: date,
      onChange: handleDateChange,
      setOpenView: setOpenView,
      openView: openView,
      toolbarTitle: toolbarTitle,
      toolbarFormat: toolbarFormat,
      toolbarPlaceholder: toolbarPlaceholder,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: toggleMobileKeyboardView
    })), /*#__PURE__*/_jsx(PickerView, {
      children: isMobileKeyboardViewOpen ? /*#__PURE__*/_jsx(MobileKeyboardInputView, {
        children: /*#__PURE__*/_jsx(KeyboardDateInput, _extends({}, DateInputProps, {
          ignoreInvalidInputs: true,
          disableOpenPicker: true,
          TextFieldProps: MobileKeyboardTextFieldProps
        }))
      }) : /*#__PURE__*/_jsxs(React.Fragment, {
        children: [isDatePickerView(openView) && /*#__PURE__*/_jsx(CalendarPicker, _extends({
          autoFocus: autoFocus,
          date: date,
          onViewChange: setOpenView,
          onChange: handleChangeAndOpenNext,
          view: openView // Unclear why the predicate `isDatePickerView` does not imply the casted type
          ,
          views: views.filter(isDatePickerView)
        }, other)), isTimePickerView(openView) && /*#__PURE__*/_jsx(ClockPicker, _extends({}, other, {
          autoFocus: autoFocus,
          date: date,
          view: openView,
          onChange: handleChangeAndOpenNext,
          openNextView: () => setOpenView(nextView),
          openPreviousView: () => setOpenView(previousView),
          nextViewAvailable: !nextView,
          previousViewAvailable: !previousView || isDatePickerView(previousView),
          showViewSwitcher: wrapperVariant === 'desktop'
        }))]
      })
    })]
  });
}

export default Picker;