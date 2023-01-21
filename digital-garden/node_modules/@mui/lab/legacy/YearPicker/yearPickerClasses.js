import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getYearPickerUtilityClass(slot) {
  return generateUtilityClass('MuiYearPicker', slot);
}
var yearPickerClasses = generateUtilityClasses('MuiYearPicker', ['root']);
export default yearPickerClasses;