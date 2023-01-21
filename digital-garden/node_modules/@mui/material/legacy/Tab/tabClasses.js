import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getTabUtilityClass(slot) {
  return generateUtilityClass('MuiTab', slot);
}
var tabClasses = generateUtilityClasses('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper']);
export default tabClasses;