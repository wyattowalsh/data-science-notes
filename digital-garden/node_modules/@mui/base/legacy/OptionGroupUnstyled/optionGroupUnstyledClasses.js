import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getOptionGroupUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiOptionGroupUnstyled', slot);
}
var optionGroupUnstyledClasses = generateUtilityClasses('MuiOptionGroupUnstyled', ['root', 'label', 'list']);
export default optionGroupUnstyledClasses;