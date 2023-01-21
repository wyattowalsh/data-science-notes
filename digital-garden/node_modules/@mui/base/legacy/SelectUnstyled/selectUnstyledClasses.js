import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getSelectUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiSelectUnstyled', slot);
}
var selectUnstyledClasses = generateUtilityClasses('MuiSelectUnstyled', ['root', 'button', 'listbox', 'popper', 'active', 'expanded', 'disabled', 'focusVisible']);
export default selectUnstyledClasses;