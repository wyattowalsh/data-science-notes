import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getContainerUtilityClass(slot) {
  return generateUtilityClass('MuiContainer', slot);
}
var containerClasses = generateUtilityClasses('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);
export default containerClasses;