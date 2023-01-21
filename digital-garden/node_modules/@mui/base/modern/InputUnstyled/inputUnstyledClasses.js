import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getInputUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiInput', slot);
}
const inputBaseClasses = generateUtilityClasses('MuiInput', ['root', 'formControl', 'focused', 'disabled', 'error', 'multiline', 'input', 'inputMultiline', 'inputTypeSearch', 'adornedStart', 'adornedEnd']);
export default inputBaseClasses;