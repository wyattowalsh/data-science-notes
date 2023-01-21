import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getPopoverUtilityClass(slot) {
  return generateUtilityClass('MuiPopover', slot);
}
var popoverClasses = generateUtilityClasses('MuiPopover', ['root', 'paper']);
export default popoverClasses;