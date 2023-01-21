import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getTimelineUtilityClass(slot) {
  return generateUtilityClass('MuiTimeline', slot);
}
var timelineClasses = generateUtilityClasses('MuiTimeline', ['root', 'positionLeft', 'positionRight', 'positionAlternate']);
export default timelineClasses;