import _extends from "@babel/runtime/helpers/esm/extends";

var _DateRangeIcon, _TimeIcon;

import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import TimeIcon from '../internal/svg-icons/Time';
import DateRangeIcon from '../internal/svg-icons/DateRange';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const viewToTab = openView => {
  // TODO: what happens if `openView` is `month`?
  if (['day', 'month', 'year'].includes(openView)) {
    return 'date';
  }

  return 'time';
};

const tabToView = tab => {
  if (tab === 'date') {
    return 'day';
  }

  return 'hours';
};

const DateTimePickerTabsRoot = styled(Tabs)(({
  ownerState,
  theme
}) => _extends({
  boxShadow: `0 -1px 0 0 inset ${theme.palette.divider}`
}, ownerState.wrapperVariant === 'desktop' && {
  order: 1,
  boxShadow: `0 1px 0 0 inset ${theme.palette.divider}`,
  [`& .${tabsClasses.indicator}`]: {
    bottom: 'auto',
    top: 0
  }
}));
/**
 * @ignore - internal component.
 */

const DateTimePickerTabs = props => {
  const {
    dateRangeIcon = _DateRangeIcon || (_DateRangeIcon = /*#__PURE__*/_jsx(DateRangeIcon, {})),
    onChange,
    timeIcon = _TimeIcon || (_TimeIcon = /*#__PURE__*/_jsx(TimeIcon, {})),
    view
  } = props;
  const wrapperVariant = React.useContext(WrapperVariantContext);

  const ownerState = _extends({}, props, {
    wrapperVariant
  });

  const handleChange = (event, value) => {
    onChange(tabToView(value));
  };

  return /*#__PURE__*/_jsxs(DateTimePickerTabsRoot, {
    ownerState: ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    children: [/*#__PURE__*/_jsx(Tab, {
      value: "date",
      "aria-label": "pick date",
      icon: /*#__PURE__*/_jsx(React.Fragment, {
        children: dateRangeIcon
      })
    }), /*#__PURE__*/_jsx(Tab, {
      value: "time",
      "aria-label": "pick time",
      icon: /*#__PURE__*/_jsx(React.Fragment, {
        children: timeIcon
      })
    })]
  });
};

export default DateTimePickerTabs;