import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getTimelineOppositeContentUtilityClass(slot) {
  return generateUtilityClass('MuiTimelineOppositeContent', slot);
}
var timelineOppositeContentClasses = generateUtilityClasses('MuiTimelineOppositeContent', ['root', 'positionLeft', 'positionRight', 'positionAlternate']);
export default timelineOppositeContentClasses;