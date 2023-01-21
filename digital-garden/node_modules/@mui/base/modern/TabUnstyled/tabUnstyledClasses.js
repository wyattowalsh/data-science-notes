import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getTabUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabUnstyled', slot);
}
const tabUnstyledClasses = generateUtilityClasses('TabUnstyled', ['root', 'selected', 'disabled']);
export default tabUnstyledClasses;