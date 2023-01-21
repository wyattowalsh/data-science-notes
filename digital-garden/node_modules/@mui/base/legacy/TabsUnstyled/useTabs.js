import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { unstable_useControlled as useControlled, unstable_useId as useId } from '@mui/utils';

var useTabs = function useTabs(props) {
  var valueProp = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      orientation = props.orientation,
      direction = props.direction,
      selectionFollowsFocus = props.selectionFollowsFocus;

  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Tabs',
    state: 'value'
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var idPrefix = useId();
  var onSelected = React.useCallback(function (e, newValue) {
    setValue(newValue);

    if (onChange) {
      onChange(e, newValue);
    }
  }, [onChange, setValue]);

  var getRootProps = function getRootProps() {
    return {};
  };

  var tabsContextValue = React.useMemo(function () {
    return {
      idPrefix: idPrefix,
      value: value,
      onSelected: onSelected,
      orientation: orientation,
      direction: direction,
      selectionFollowsFocus: selectionFollowsFocus
    };
  }, [idPrefix, value, onSelected, orientation, direction, selectionFollowsFocus]);
  return {
    getRootProps: getRootProps,
    tabsContextValue: tabsContextValue
  };
};

export default useTabs;