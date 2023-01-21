import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { useTabContext, getTabId, getPanelId } from '../TabsUnstyled';
import { useButton } from '../ButtonUnstyled';

var useTab = function useTab(props) {
  var valueProp = props.value,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus;

  var _useButton = useButton(props),
      getRootPropsButton = _useButton.getRootProps,
      otherButtonProps = _objectWithoutProperties(_useButton, ["getRootProps"]);

  var context = useTabContext();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  var value = valueProp != null ? valueProp : 0;
  var selected = context.value === value;
  var selectionFollowsFocus = context.selectionFollowsFocus;
  var a11yAttributes = {
    role: 'tab',
    'aria-controls': getPanelId(context, value),
    id: getTabId(context, value),
    'aria-selected': selected,
    disabled: otherButtonProps.disabled
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected) {
      if (onChange) {
        onChange(event, value);
      }

      context.onSelected(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  var handleClick = function handleClick(event) {
    if (!selected) {
      if (onChange) {
        onChange(event, value);
      }

      context.onSelected(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var getRootProps = function getRootProps(otherHandlers) {
    var buttonResolvedProps = getRootPropsButton(_extends({
      onClick: handleClick,
      onFocus: handleFocus
    }, otherHandlers));
    return _extends({}, buttonResolvedProps, a11yAttributes);
  };

  return _extends({
    getRootProps: getRootProps
  }, otherButtonProps, {
    selected: selected
  });
};

export default useTab;