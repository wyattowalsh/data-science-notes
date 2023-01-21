import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getTableUtilityClass(slot) {
  return generateUtilityClass('MuiTable', slot);
}
var tableClasses = generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);
export default tableClasses;