import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getOptionUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiOptionUnstyled', slot);
}
const optionUnstyledClasses = generateUtilityClasses('MuiOptionUnstyled', ['root', 'disabled', 'selected', 'highlighted']);
export default optionUnstyledClasses;