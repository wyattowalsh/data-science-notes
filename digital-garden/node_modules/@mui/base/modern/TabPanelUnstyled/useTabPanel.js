import { useTabContext, getPanelId, getTabId } from '../TabsUnstyled';

const useTabPanel = props => {
  const {
    value
  } = props;
  const context = useTabContext();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const hidden = value !== context.value;
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);

  const getRootProps = () => {
    return {
      'aria-labelledby': tabId,
      hidden,
      id
    };
  };

  return {
    hidden,
    getRootProps
  };
};

export default useTabPanel;