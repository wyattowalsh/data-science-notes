import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getTextFieldUtilityClass(slot) {
  return generateUtilityClass('MuiTextField', slot);
}
var textFieldClasses = generateUtilityClasses('MuiTextField', ['root']);
export default textFieldClasses;