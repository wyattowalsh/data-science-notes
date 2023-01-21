import style from './style';
import compose from './compose';
import { handleBreakpoints, values as breakpointsValues } from './breakpoints';

function transform(value) {
  return value <= 1 && value !== 0 ? "".concat(value * 100, "%") : value;
}

export var width = style({
  prop: 'width',
  transform: transform
});
export var maxWidth = function maxWidth(props) {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    var styleFromPropValue = function styleFromPropValue(propValue) {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

      var breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || breakpointsValues[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };

    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
export var minWidth = style({
  prop: 'minWidth',
  transform: transform
});
export var height = style({
  prop: 'height',
  transform: transform
});
export var maxHeight = style({
  prop: 'maxHeight',
  transform: transform
});
export var minHeight = style({
  prop: 'minHeight',
  transform: transform
});
export var sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform: transform
});
export var sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform: transform
});
export var boxSizing = style({
  prop: 'boxSizing'
});
var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
export default sizing;