import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import merge from '../merge';
import { styleFunctionMapping as defaultStyleFunctionMapping } from '../getThemeValue';
import { handleBreakpoints, createEmptyBreakpointObject, removeUnusedBreakpoints } from '../breakpoints';

function objectsHaveSameKeys() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  var allKeys = objects.reduce(function (keys, object) {
    return keys.concat(Object.keys(object));
  }, []);
  var union = new Set(allKeys);
  return objects.every(function (object) {
    return union.size === Object.keys(object).length;
  });
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
} // eslint-disable-next-line @typescript-eslint/naming-convention


export function unstable_createStyleFunctionSx() {
  var styleFunctionMapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStyleFunctionMapping;
  var propToStyleFunction = Object.keys(styleFunctionMapping).reduce(function (acc, styleFnName) {
    styleFunctionMapping[styleFnName].filterProps.forEach(function (propName) {
      acc[propName] = styleFunctionMapping[styleFnName];
    });
    return acc;
  }, {});

  function getThemeValue(prop, value, theme) {
    var _inputProps;

    var inputProps = (_inputProps = {}, _defineProperty(_inputProps, prop, value), _defineProperty(_inputProps, "theme", theme), _inputProps);
    var styleFunction = propToStyleFunction[prop];
    return styleFunction ? styleFunction(inputProps) : _defineProperty({}, prop, value);
  }

  function styleFunctionSx(props) {
    var _ref2 = props || {},
        sx = _ref2.sx,
        _ref2$theme = _ref2.theme,
        theme = _ref2$theme === void 0 ? {} : _ref2$theme;

    if (!sx) {
      return null; // emotion & styled-components will neglect null
    }
    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */


    function traverse(sxInput) {
      var sxObject = sxInput;

      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (_typeof(sxInput) !== 'object') {
        // value
        return sxInput;
      }

      if (!sxObject) {
        return null;
      }

      var emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      var breakpointsKeys = Object.keys(emptyBreakpoints);
      var css = emptyBreakpoints;
      Object.keys(sxObject).forEach(function (styleKey) {
        var value = callIfFn(sxObject[styleKey], theme);

        if (value !== null && value !== undefined) {
          if (_typeof(value) === 'object') {
            if (propToStyleFunction[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme));
            } else {
              var breakpointsValues = handleBreakpoints({
                theme: theme
              }, value, function (x) {
                return _defineProperty({}, styleKey, x);
              });

              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme: theme
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css);
    }

    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }

  return styleFunctionSx;
}
var styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];
export default styleFunctionSx;