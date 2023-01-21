import ClassNameGenerator from '../className/ClassNameGenerator';
var globalStateClassesMapping = {
  active: 'Mui-active',
  checked: 'Mui-checked',
  completed: 'Mui-completed',
  disabled: 'Mui-disabled',
  error: 'Mui-error',
  expanded: 'Mui-expanded',
  focused: 'Mui-focused',
  focusVisible: 'Mui-focusVisible',
  required: 'Mui-required',
  selected: 'Mui-selected'
};
export default function generateUtilityClass(componentName, slot) {
  var globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || "".concat(ClassNameGenerator.generate(componentName), "-").concat(slot);
}