import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getRadioUtilityClass(slot) {
  return generateUtilityClass('MuiRadio', slot);
}
var radioClasses = generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary']);
export default radioClasses;