import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getTabsListUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabsListUnstyled', slot);
}
var tabsListUnstyledClasses = generateUtilityClasses('TabsListUnstyled', ['root', 'horizontal', 'vertical']);
export default tabsListUnstyledClasses;