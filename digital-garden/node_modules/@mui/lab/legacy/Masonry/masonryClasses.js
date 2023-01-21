import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getMasonryUtilityClass(slot) {
  return generateUtilityClass('MuiMasonry', slot);
}
var masonryClasses = generateUtilityClasses('MuiMasonry', ['root']);
export default masonryClasses;