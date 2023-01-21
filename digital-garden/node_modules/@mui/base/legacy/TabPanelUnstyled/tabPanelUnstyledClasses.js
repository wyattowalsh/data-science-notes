import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getTabPanelUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabPanelUnstyled', slot);
}
var tabPanelUnstyledClasses = generateUtilityClasses('TabPanelUnstyled', ['root', 'hidden']);
export default tabPanelUnstyledClasses;