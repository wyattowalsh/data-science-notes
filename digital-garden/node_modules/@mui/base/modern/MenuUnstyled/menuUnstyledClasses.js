import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getMenuUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiMenuUnstyled', slot);
}
const menuUnstyledClasses = generateUtilityClasses('MuiMenuUnstyled', ['root', 'listbox', 'expanded']);
export default menuUnstyledClasses;