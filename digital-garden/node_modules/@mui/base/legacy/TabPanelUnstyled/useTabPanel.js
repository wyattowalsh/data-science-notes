import { useTabContext, getPanelId, getTabId } from '../TabsUnstyled';

var useTabPanel = function useTabPanel(props) {
  var value = props.value;
  var context = useTabContext();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  var hidden = value !== context.value;
  var id = getPanelId(context, value);
  var tabId = getTabId(context, value);

  var getRootProps = function getRootProps() {
    return {
      'aria-labelledby': tabId,
      hidden: hidden,
      id: id
    };
  };

  return {
    hidden: hidden,
    getRootProps: getRootProps
  };
};

export default useTabPanel;