import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getTreeViewUtilityClass(slot) {
  return generateUtilityClass('MuiTreeView', slot);
}
const treeViewClasses = generateUtilityClasses('MuiTreeView', ['root']);
export default treeViewClasses;