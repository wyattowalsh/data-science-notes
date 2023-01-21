import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import FadeTransitionGroup from './PickersFadeTransitionGroup';
// tslint:disable-next-line no-relative-import-in-test
import ArrowDropDownIcon from '../internal/svg-icons/ArrowDropDown';
import PickersArrowSwitcher from '../internal/pickers/PickersArrowSwitcher';
import { usePreviousMonthDisabled, useNextMonthDisabled } from '../internal/pickers/hooks/date-helpers-hooks';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var PickersCalendarHeaderRoot = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
});
var PickersCalendarHeaderLabel = styled('div')(function (_ref) {
  var theme = _ref.theme;
  return _extends({
    display: 'flex',
    maxHeight: 30,
    overflow: 'hidden',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: 'auto'
  }, theme.typography.body1, {
    fontWeight: theme.typography.fontWeightMedium
  });
});
var PickersCalendarHeaderLabelItem = styled('div')({
  marginRight: 6
});
var PickersCalendarHeaderSwitchViewButton = styled(IconButton)({
  marginRight: 'auto'
});
var PickersCalendarHeaderSwitchView = styled(ArrowDropDownIcon)(function (_ref2) {
  var theme = _ref2.theme,
      ownerState = _ref2.ownerState;
  return _extends({
    willChange: 'transform',
    transition: theme.transitions.create('transform'),
    transform: 'rotate(0deg)'
  }, ownerState.openView === 'year' && {
    transform: 'rotate(180deg)'
  });
});

function getSwitchingViewAriaText(view) {
  return view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view';
}
/**
 * @ignore - do not document.
 */


function PickersCalendarHeader(props) {
  var _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      month = props.currentMonth,
      disabled = props.disabled,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      _props$getViewSwitchi = props.getViewSwitchingButtonText,
      getViewSwitchingButtonText = _props$getViewSwitchi === void 0 ? getSwitchingViewAriaText : _props$getViewSwitchi,
      _props$leftArrowButto = props.leftArrowButtonText,
      leftArrowButtonText = _props$leftArrowButto === void 0 ? 'Previous month' : _props$leftArrowButto,
      maxDate = props.maxDate,
      minDate = props.minDate,
      onMonthChange = props.onMonthChange,
      onViewChange = props.onViewChange,
      currentView = props.openView,
      reduceAnimations = props.reduceAnimations,
      _props$rightArrowButt = props.rightArrowButtonText,
      rightArrowButtonText = _props$rightArrowButt === void 0 ? 'Next month' : _props$rightArrowButt,
      views = props.views;
  var utils = useUtils();
  var switchViewButtonProps = componentsProps.switchViewButton || {};

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(month), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(month), 'right');
  };

  var isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture: disableFuture || disabled,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast: disablePast || disabled,
    minDate: minDate
  });

  var handleToggleView = function handleToggleView() {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }

    if (views.length === 2) {
      onViewChange(views.find(function (view) {
        return view !== currentView;
      }) || views[0]);
    } else {
      // switching only between first 2
      var nextIndexToOpen = views.indexOf(currentView) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  }; // No need to display more information


  if (views.length === 1 && views[0] === 'year') {
    return null;
  }

  var ownerState = props;
  return /*#__PURE__*/_jsxs(PickersCalendarHeaderRoot, {
    ownerState: ownerState,
    children: [/*#__PURE__*/_jsxs(PickersCalendarHeaderLabel, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState: ownerState,
      children: [/*#__PURE__*/_jsx(FadeTransitionGroup, {
        reduceAnimations: reduceAnimations,
        transKey: utils.format(month, 'month'),
        children: /*#__PURE__*/_jsx(PickersCalendarHeaderLabelItem, {
          "aria-live": "polite",
          ownerState: ownerState,
          children: utils.format(month, 'month')
        })
      }), /*#__PURE__*/_jsx(FadeTransitionGroup, {
        reduceAnimations: reduceAnimations,
        transKey: utils.format(month, 'year'),
        children: /*#__PURE__*/_jsx(PickersCalendarHeaderLabelItem, {
          "aria-live": "polite",
          ownerState: ownerState,
          children: utils.format(month, 'year')
        })
      }), views.length > 1 && !disabled && /*#__PURE__*/_jsx(PickersCalendarHeaderSwitchViewButton, _extends({
        size: "small",
        as: components.SwitchViewButton,
        "aria-label": getViewSwitchingButtonText(currentView)
      }, switchViewButtonProps, {
        children: /*#__PURE__*/_jsx(PickersCalendarHeaderSwitchView, {
          as: components.SwitchViewIcon,
          ownerState: ownerState
        })
      }))]
    }), /*#__PURE__*/_jsx(Fade, {
      in: currentView === 'day',
      children: /*#__PURE__*/_jsx(PickersArrowSwitcher, {
        leftArrowButtonText: leftArrowButtonText,
        rightArrowButtonText: rightArrowButtonText,
        components: components,
        componentsProps: componentsProps,
        onLeftClick: selectPreviousMonth,
        onRightClick: selectNextMonth,
        isLeftDisabled: isPreviousMonthDisabled,
        isRightDisabled: isNextMonthDisabled
      })
    })]
  });
}

export default PickersCalendarHeader;