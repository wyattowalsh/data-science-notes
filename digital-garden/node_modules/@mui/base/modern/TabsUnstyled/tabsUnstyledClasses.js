import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getTabsUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabsUnstyled', slot);
}
const tabsUnstyledClasses = generateUtilityClasses('TabsUnstyled', ['root', 'horizontal', 'vertical']);
export default tabsUnstyledClasses;