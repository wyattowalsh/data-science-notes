import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getMenuItemUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiMenuItemUnstyled', slot);
}
const menuItemUnstyledClasses = generateUtilityClasses('MuiMenuItemUnstyled', ['root', 'disabled', 'focusVisible']);
export default menuItemUnstyledClasses;