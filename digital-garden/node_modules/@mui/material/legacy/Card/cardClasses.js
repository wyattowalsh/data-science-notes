import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getCardUtilityClass(slot) {
  return generateUtilityClass('MuiCard', slot);
}
var cardClasses = generateUtilityClasses('MuiCard', ['root']);
export default cardClasses;