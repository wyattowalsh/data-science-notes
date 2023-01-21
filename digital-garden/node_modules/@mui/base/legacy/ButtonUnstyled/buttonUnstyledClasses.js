import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getButtonUnstyledUtilityClass(slot) {
  return generateUtilityClass('ButtonUnstyled', slot);
}
var buttonUnstyledClasses = generateUtilityClasses('ButtonUnstyled', ['root', 'active', 'disabled', 'focusVisible']);
export default buttonUnstyledClasses;