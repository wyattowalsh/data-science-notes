import { createBox } from '@mui/system';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '../className';
import { createTheme } from '../styles';
var defaultTheme = createTheme();
/**
 * @ignore - do not document.
 */

var Box = createBox({
  defaultTheme: defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: ClassNameGenerator.generate
});
export default Box;