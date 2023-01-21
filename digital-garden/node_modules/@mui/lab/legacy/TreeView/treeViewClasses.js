import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getTreeViewUtilityClass(slot) {
  return generateUtilityClass('MuiTreeView', slot);
}
var treeViewClasses = generateUtilityClasses('MuiTreeView', ['root']);
export default treeViewClasses;