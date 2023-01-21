import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getFormControlUnstyledUtilityClasses(slot) {
  return generateUtilityClass('MuiFormControl', slot);
}
const formControlUnstyledClasses = generateUtilityClasses('MuiFormControl', ['root', 'disabled']);
export default formControlUnstyledClasses;