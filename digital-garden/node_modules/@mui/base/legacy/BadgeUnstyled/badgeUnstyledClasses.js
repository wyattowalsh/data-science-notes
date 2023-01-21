import generateUtilityClasses from '../generateUtilityClasses';
import generateUtilityClass from '../generateUtilityClass';
export function getBadgeUtilityClass(slot) {
  return generateUtilityClass('MuiBadge', slot);
}
var badgeUnstyledClasses = generateUtilityClasses('MuiBadge', ['root', 'badge', 'dot', 'standard', 'anchorOriginTopLeft', 'anchorOriginTopRight', 'anchorOriginBottomLeft', 'anchorOriginBottomRight', 'invisible']);
export default badgeUnstyledClasses;