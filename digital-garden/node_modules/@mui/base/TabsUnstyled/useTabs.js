import * as React from 'react';
import { unstable_useControlled as useControlled, unstable_useId as useId } from '@mui/utils';

const useTabs = props => {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus
  } = props;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Tabs',
    state: 'value'
  });
  const idPrefix = useId();
  const onSelected = React.useCallback((e, newValue) => {
    setValue(newValue);

    if (onChange) {
      onChange(e, newValue);
    }
  }, [onChange, setValue]);

  const getRootProps = () => {
    return {};
  };

  const tabsContextValue = React.useMemo(() => {
    return {
      idPrefix,
      value,
      onSelected,
      orientation,
      direction,
      selectionFollowsFocus
    };
  }, [idPrefix, value, onSelected, orientation, direction, selectionFollowsFocus]);
  return {
    getRootProps,
    tabsContextValue
  };
};

export default useTabs;