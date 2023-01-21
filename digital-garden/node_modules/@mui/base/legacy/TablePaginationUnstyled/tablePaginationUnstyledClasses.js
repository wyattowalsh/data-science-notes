import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getTablePaginationUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiTablePaginationUnstyled', slot);
}
var tablePaginationClasses = generateUtilityClasses('MuiTablePaginationUnstyled', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
export default tablePaginationClasses;