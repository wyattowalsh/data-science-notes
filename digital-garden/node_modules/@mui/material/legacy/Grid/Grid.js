import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_extendSxProp as extendSxProp, handleBreakpoints, unstable_resolveBreakpointValues as resolveBreakpointValues } from '@mui/system';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import requirePropFactory from '../utils/requirePropFactory';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import GridContext from './GridContext';
import gridClasses, { getGridUtilityClass } from './gridClasses';
import { jsx as _jsx } from "react/jsx-runtime";

function getOffset(val) {
  var parse = parseFloat(val);
  return "".concat(parse).concat(String(val).replace(String(parse), '') || 'px');
}

export function generateGrid(_ref) {
  var theme = _ref.theme,
      ownerState = _ref.ownerState;
  var size;
  return theme.breakpoints.keys.reduce(function (globalStyles, breakpoint) {
    // Use side effect over immutability for better performance.
    var styles = {};

    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }

    if (!size) {
      return globalStyles;
    }

    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    } else if (size === 'auto') {
      styles = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    } else {
      var columnsBreakpointValues = resolveBreakpointValues({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      var columnValue = _typeof(columnsBreakpointValues) === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;

      if (columnValue === undefined || columnValue === null) {
        return globalStyles;
      } // Keep 7 significant numbers.


      var width = "".concat(Math.round(size / columnValue * 10e7) / 10e5, "%");
      var more = {};

      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        var themeSpacing = theme.spacing(ownerState.columnSpacing);

        if (themeSpacing !== '0px') {
          var fullWidth = "calc(".concat(width, " + ").concat(getOffset(themeSpacing), ")");
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      } // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41


      styles = _extends({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    } // No need for a media query for the first size.


    if (theme.breakpoints.values[breakpoint] === 0) {
      _extends(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }

    return globalStyles;
  }, {});
}
export function generateDirection(_ref2) {
  var theme = _ref2.theme,
      ownerState = _ref2.ownerState;
  var directionValues = resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return handleBreakpoints({
    theme: theme
  }, directionValues, function (propValue) {
    var output = {
      flexDirection: propValue
    };

    if (propValue.indexOf('column') === 0) {
      output["& > .".concat(gridClasses.item)] = {
        maxWidth: 'none'
      };
    }

    return output;
  });
}
export function generateRowGap(_ref3) {
  var theme = _ref3.theme,
      ownerState = _ref3.ownerState;
  var container = ownerState.container,
      rowSpacing = ownerState.rowSpacing;
  var styles = {};

  if (container && rowSpacing !== 0) {
    var rowSpacingValues = resolveBreakpointValues({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    styles = handleBreakpoints({
      theme: theme
    }, rowSpacingValues, function (propValue) {
      var themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return _defineProperty({
          marginTop: "-".concat(getOffset(themeSpacing))
        }, "& > .".concat(gridClasses.item), {
          paddingTop: getOffset(themeSpacing)
        });
      }

      return {};
    });
  }

  return styles;
}
export function generateColumnGap(_ref5) {
  var theme = _ref5.theme,
      ownerState = _ref5.ownerState;
  var container = ownerState.container,
      columnSpacing = ownerState.columnSpacing;
  var styles = {};

  if (container && columnSpacing !== 0) {
    var columnSpacingValues = resolveBreakpointValues({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    styles = handleBreakpoints({
      theme: theme
    }, columnSpacingValues, function (propValue) {
      var themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return _defineProperty({
          width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
          marginLeft: "-".concat(getOffset(themeSpacing))
        }, "& > .".concat(gridClasses.item), {
          paddingLeft: getOffset(themeSpacing)
        });
      }

      return {};
    });
  }

  return styles;
}
export function resolveSpacingClasses(spacing, container) {
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // in case of grid item or undefined/null or `spacing` <= 0
  if (!container || !spacing || spacing <= 0) {
    return [];
  } // in case of string/number `spacing`


  if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
    return [styles["spacing-xs-".concat(String(spacing))] || "spacing-xs-".concat(String(spacing))];
  } // in case of object `spacing`


  var xs = spacing.xs,
      sm = spacing.sm,
      md = spacing.md,
      lg = spacing.lg,
      xl = spacing.xl;
  return [Number(xs) > 0 && (styles["spacing-xs-".concat(String(xs))] || "spacing-xs-".concat(String(xs))), Number(sm) > 0 && (styles["spacing-sm-".concat(String(sm))] || "spacing-sm-".concat(String(sm))), Number(md) > 0 && (styles["spacing-md-".concat(String(md))] || "spacing-md-".concat(String(md))), Number(lg) > 0 && (styles["spacing-lg-".concat(String(lg))] || "spacing-lg-".concat(String(lg))), Number(xl) > 0 && (styles["spacing-xl-".concat(String(xl))] || "spacing-xl-".concat(String(xl)))];
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',

var GridRoot = styled('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    var _props$ownerState = props.ownerState,
        container = _props$ownerState.container,
        direction = _props$ownerState.direction,
        item = _props$ownerState.item,
        lg = _props$ownerState.lg,
        md = _props$ownerState.md,
        sm = _props$ownerState.sm,
        spacing = _props$ownerState.spacing,
        wrap = _props$ownerState.wrap,
        xl = _props$ownerState.xl,
        xs = _props$ownerState.xs,
        zeroMinWidth = _props$ownerState.zeroMinWidth;
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth].concat(_toConsumableArray(resolveSpacingClasses(spacing, container, styles)), [direction !== 'row' && styles["direction-xs-".concat(String(direction))], wrap !== 'wrap' && styles["wrap-xs-".concat(String(wrap))], xs !== false && styles["grid-xs-".concat(String(xs))], sm !== false && styles["grid-sm-".concat(String(sm))], md !== false && styles["grid-md-".concat(String(md))], lg !== false && styles["grid-lg-".concat(String(lg))], xl !== false && styles["grid-xl-".concat(String(xl))]]);
  }
})(function (_ref7) {
  var ownerState = _ref7.ownerState;
  return _extends({
    boxSizing: 'border-box'
  }, ownerState.container && {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  }, ownerState.item && {
    margin: 0 // For instance, it's useful when used with a `figure` element.

  }, ownerState.zeroMinWidth && {
    minWidth: 0
  }, ownerState.wrap !== 'wrap' && {
    flexWrap: ownerState.wrap
  });
}, generateDirection, generateRowGap, generateColumnGap, generateGrid);

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
      container = ownerState.container,
      direction = ownerState.direction,
      item = ownerState.item,
      lg = ownerState.lg,
      md = ownerState.md,
      sm = ownerState.sm,
      spacing = ownerState.spacing,
      wrap = ownerState.wrap,
      xl = ownerState.xl,
      xs = ownerState.xs,
      zeroMinWidth = ownerState.zeroMinWidth;
  var slots = {
    root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth'].concat(_toConsumableArray(resolveSpacingClasses(spacing, container)), [direction !== 'row' && "direction-xs-".concat(String(direction)), wrap !== 'wrap' && "wrap-xs-".concat(String(wrap)), xs !== false && "grid-xs-".concat(String(xs)), sm !== false && "grid-sm-".concat(String(sm)), md !== false && "grid-md-".concat(String(md)), lg !== false && "grid-lg-".concat(String(lg)), xl !== false && "grid-xl-".concat(String(xl))])
  };
  return composeClasses(slots, getGridUtilityClass, classes);
};

var Grid = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
  var themeProps = useThemeProps({
    props: inProps,
    name: 'MuiGrid'
  });
  var props = extendSxProp(themeProps);

  var className = props.className,
      columnsProp = props.columns,
      columnSpacingProp = props.columnSpacing,
      _props$component = props.component,
      component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      rowSpacingProp = props.rowSpacing,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = _objectWithoutProperties(props, ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "lg", "md", "rowSpacing", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var rowSpacing = rowSpacingProp || spacing;
  var columnSpacing = columnSpacingProp || spacing;
  var columnsContext = React.useContext(GridContext); // columns set with default breakpoint unit of 12

  var columns = container ? columnsProp || 12 : columnsContext;

  var ownerState = _extends({}, props, {
    columns: columns,
    container: container,
    direction: direction,
    item: item,
    lg: lg,
    md: md,
    sm: sm,
    rowSpacing: rowSpacing,
    columnSpacing: columnSpacing,
    wrap: wrap,
    xl: xl,
    xs: xs,
    zeroMinWidth: zeroMinWidth
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(GridContext.Provider, {
    value: columns,
    children: /*#__PURE__*/_jsx(GridRoot, _extends({
      ownerState: ownerState,
      className: clsx(classes.root, className),
      as: component,
      ref: ref
    }, other))
  });
});
process.env.NODE_ENV !== "production" ? Grid.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The number of columns.
   * @default 12
   */
  columns: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number, PropTypes.object]),

  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: PropTypes.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: PropTypes.bool,

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),

  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),

  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.bool]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: PropTypes.bool
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  var requireProp = requirePropFactory('Grid', Grid); // eslint-disable-next-line no-useless-concat

  Grid['propTypes' + ''] = _extends({}, Grid.propTypes, {
    direction: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

export default Grid;