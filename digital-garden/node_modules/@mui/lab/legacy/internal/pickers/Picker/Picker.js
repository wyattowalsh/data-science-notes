import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
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
export var MobileKeyboardInputView = styled('div')({
  padding: '16px 24px'
});
var PickerRoot = styled('div')(function (_ref) {
  var ownerState = _ref.ownerState;
  return _extends({
    display: 'flex',
    flexDirection: 'column'
  }, ownerState.isLandscape && {
    flexDirection: 'row'
  });
});
var MobileKeyboardTextFieldProps = {
  fullWidth: true
};

var isDatePickerView = function isDatePickerView(view) {
  return view === 'year' || view === 'month' || view === 'day';
};

var isTimePickerView = function isTimePickerView(view) {
  return view === 'hours' || view === 'minutes' || view === 'seconds';
};

function Picker(props) {
  var autoFocus = props.autoFocus,
      className = props.className,
      date = props.date,
      DateInputProps = props.DateInputProps,
      isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
      onDateChange = props.onDateChange,
      onViewChange = props.onViewChange,
      openTo = props.openTo,
      orientation = props.orientation,
      showToolbar = props.showToolbar,
      toggleMobileKeyboardView = props.toggleMobileKeyboardView,
      _props$ToolbarCompone = props.ToolbarComponent,
      ToolbarComponent = _props$ToolbarCompone === void 0 ? function () {
    return null;
  } : _props$ToolbarCompone,
      toolbarFormat = props.toolbarFormat,
      toolbarPlaceholder = props.toolbarPlaceholder,
      toolbarTitle = props.toolbarTitle,
      views = props.views,
      other = _objectWithoutProperties(props, ["autoFocus", "className", "date", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "onViewChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"]);

  var isLandscape = useIsLandscape(views, orientation);
  var wrapperVariant = React.useContext(WrapperVariantContext);
  var toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;
  var handleDateChange = React.useCallback(function (newDate, selectionState) {
    onDateChange(newDate, wrapperVariant, selectionState);
  }, [onDateChange, wrapperVariant]);
  var handleViewChange = React.useCallback(function (newView) {
    if (isMobileKeyboardViewOpen) {
      toggleMobileKeyboardView();
    }

    if (onViewChange) {
      onViewChange(newView);
    }
  }, [isMobileKeyboardViewOpen, onViewChange, toggleMobileKeyboardView]);

  var _useViews = useViews({
    view: undefined,
    views: views,
    openTo: openTo,
    onChange: handleDateChange,
    onViewChange: handleViewChange
  }),
      openView = _useViews.openView,
      nextView = _useViews.nextView,
      previousView = _useViews.previousView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  return /*#__PURE__*/_jsxs(PickerRoot, {
    ownerState: {
      isLandscape: isLandscape
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
          openNextView: function openNextView() {
            return setOpenView(nextView);
          },
          openPreviousView: function openPreviousView() {
            return setOpenView(previousView);
          },
          nextViewAvailable: !nextView,
          previousViewAvailable: !previousView || isDatePickerView(previousView),
          showViewSwitcher: wrapperVariant === 'desktop'
        }))]
      })
    })]
  });
}

export default Picker;