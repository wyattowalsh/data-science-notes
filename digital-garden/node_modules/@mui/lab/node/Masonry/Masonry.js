"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToNumber = exports.getStyle = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _base = require("@mui/base");

var _styles = require("@mui/material/styles");

var _system = require("@mui/system");

var _utils = require("@mui/utils");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _masonryClasses = require("./masonryClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "className", "component", "columns", "spacing", "defaultColumns", "defaultHeight", "defaultSpacing"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const parseToNumber = val => {
  return Number(val.replace('px', ''));
};

exports.parseToNumber = parseToNumber;

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _masonryClasses.getMasonryUtilityClass, classes);
};

const getStyle = ({
  ownerState,
  theme
}) => {
  let styles = {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'space-between',
    boxSizing: 'border-box',
    '& > *': {
      boxSizing: 'border-box'
    }
  };
  const stylesSSR = {};

  if (ownerState.isSSR) {
    const orderStyleSSR = {};
    const defaultSpacing = Number(theme.spacing(ownerState.defaultSpacing).replace('px', ''));

    for (let i = 1; i <= ownerState.defaultColumns; i += 1) {
      orderStyleSSR[`&:nth-of-type(${ownerState.defaultColumns}n+${i % ownerState.defaultColumns})`] = {
        order: i
      };
    }

    stylesSSR.height = ownerState.defaultHeight;
    stylesSSR.margin = -(defaultSpacing / 2);
    stylesSSR['& > *'] = (0, _extends2.default)({}, styles['& > *'], orderStyleSSR, {
      margin: defaultSpacing / 2,
      width: `calc(${(100 / ownerState.defaultColumns).toFixed(2)}% - ${defaultSpacing}px)`
    });
    return (0, _extends2.default)({}, styles, stylesSSR);
  }

  const spacingValues = (0, _system.unstable_resolveBreakpointValues)({
    values: ownerState.spacing,
    breakpoints: theme.breakpoints.values
  });
  const transformer = (0, _system.createUnarySpacing)(theme);

  const spacingStyleFromPropValue = propValue => {
    const themeSpacingValue = Number(propValue);
    const spacing = Number((0, _system.getValue)(transformer, themeSpacingValue).replace('px', ''));
    return (0, _extends2.default)({
      margin: -(spacing / 2),
      '& > *': {
        margin: spacing / 2
      }
    }, ownerState.maxColumnHeight && {
      height: Math.ceil(ownerState.maxColumnHeight + spacing)
    });
  };

  styles = (0, _utils.deepmerge)(styles, (0, _system.handleBreakpoints)({
    theme
  }, spacingValues, spacingStyleFromPropValue));
  const columnValues = (0, _system.unstable_resolveBreakpointValues)({
    values: ownerState.columns,
    breakpoints: theme.breakpoints.values
  });

  const columnStyleFromPropValue = propValue => {
    const columnValue = Number(propValue);
    const width = `${(100 / columnValue).toFixed(2)}%`;
    const spacing = typeof spacingValues !== 'object' ? (0, _system.getValue)(transformer, Number(spacingValues)) : '0px';
    return {
      '& > *': {
        width: `calc(${width} - ${spacing})`
      }
    };
  };

  styles = (0, _utils.deepmerge)(styles, (0, _system.handleBreakpoints)({
    theme
  }, columnValues, columnStyleFromPropValue)); // configure width for responsive spacing values

  if (typeof spacingValues === 'object') {
    styles = (0, _utils.deepmerge)(styles, (0, _system.handleBreakpoints)({
      theme
    }, spacingValues, (propValue, breakpoint) => {
      if (breakpoint) {
        const themeSpacingValue = Number(propValue);
        const lastBreakpoint = Object.keys(columnValues).pop();
        const spacing = (0, _system.getValue)(transformer, themeSpacingValue);
        const column = typeof columnValues === 'object' ? columnValues[breakpoint] || columnValues[lastBreakpoint] : columnValues;
        const width = `${(100 / column).toFixed(2)}%`;
        return {
          '& > *': {
            width: `calc(${width} - ${spacing})`
          }
        };
      }

      return null;
    }));
  }

  return styles;
};

exports.getStyle = getStyle;
const MasonryRoot = (0, _styles.styled)('div', {
  name: 'MuiMasonry',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(getStyle);
const Masonry = /*#__PURE__*/React.forwardRef(function Masonry(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiMasonry'
  });
  const {
    children,
    className,
    component = 'div',
    columns = 4,
    spacing = 1,
    defaultColumns,
    defaultHeight,
    defaultSpacing
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const masonryRef = React.useRef();
  const [maxColumnHeight, setMaxColumnHeight] = React.useState();
  const isSSR = !maxColumnHeight && defaultHeight && defaultColumns !== undefined && defaultSpacing !== undefined;
  const [numberOfLineBreaks, setNumberOfLineBreaks] = React.useState(isSSR ? defaultColumns - 1 : 0);
  const ownerState = (0, _extends2.default)({}, props, {
    spacing,
    columns,
    maxColumnHeight,
    defaultColumns,
    defaultHeight,
    defaultSpacing,
    isSSR
  });
  const classes = useUtilityClasses(ownerState);

  const handleResize = masonryChildren => {
    if (!masonryRef.current || !masonryChildren || masonryChildren.length === 0) {
      return;
    }

    const masonry = masonryRef.current;
    const masonryFirstChild = masonryRef.current.firstChild;
    const parentWidth = masonry.clientWidth;
    const firstChildWidth = masonryFirstChild.clientWidth;

    if (parentWidth === 0 || firstChildWidth === 0) {
      return;
    }

    const firstChildComputedStyle = window.getComputedStyle(masonryFirstChild);
    const firstChildMarginLeft = parseToNumber(firstChildComputedStyle.marginLeft);
    const firstChildMarginRight = parseToNumber(firstChildComputedStyle.marginRight);
    const currentNumberOfColumns = Math.round(parentWidth / (firstChildWidth + firstChildMarginLeft + firstChildMarginRight));
    const columnHeights = new Array(currentNumberOfColumns).fill(0);
    let skip = false;
    masonry.childNodes.forEach(child => {
      if (child.nodeType !== Node.ELEMENT_NODE || child.dataset.class === 'line-break' || skip) {
        return;
      }

      const childComputedStyle = window.getComputedStyle(child);
      const childMarginTop = parseToNumber(childComputedStyle.marginTop);
      const childMarginBottom = parseToNumber(childComputedStyle.marginBottom); // if any one of children isn't rendered yet, masonry's height shouldn't be computed yet

      const childHeight = parseToNumber(childComputedStyle.height) ? Math.ceil(parseToNumber(childComputedStyle.height)) + childMarginTop + childMarginBottom : 0;

      if (childHeight === 0) {
        skip = true;
        return;
      } // if there is a nested image that isn't rendered yet, masonry's height shouldn't be computed yet


      for (let i = 0; i < child.childNodes.length; i += 1) {
        const nestedChild = child.childNodes[i];

        if (nestedChild.tagName === 'IMG' && nestedChild.clientHeight === 0) {
          skip = true;
          break;
        }
      }

      if (!skip) {
        // find the current shortest column (where the current item will be placed)
        const currentMinColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        columnHeights[currentMinColumnIndex] += childHeight;
        const order = currentMinColumnIndex + 1;
        child.style.order = order;
      }
    });

    if (!skip) {
      setMaxColumnHeight(Math.max(...columnHeights));
      const numOfLineBreaks = currentNumberOfColumns > 0 ? currentNumberOfColumns - 1 : 0;
      setNumberOfLineBreaks(numOfLineBreaks);
    }
  };

  const observer = React.useRef(typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(handleResize));
  React.useEffect(() => {
    const resizeObserver = observer.current; // IE and old browsers are not supported

    if (resizeObserver === undefined) {
      return undefined;
    }

    if (masonryRef.current) {
      masonryRef.current.childNodes.forEach(childNode => {
        resizeObserver.observe(childNode);
      });
    }

    return () => resizeObserver ? resizeObserver.disconnect() : {};
  }, [columns, spacing, children]);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, masonryRef);
  const lineBreakStyle = {
    flexBasis: '100%',
    width: 0,
    margin: 0,
    padding: 0
  }; //  columns are likely to have different heights and hence can start to merge;
  //  a line break at the end of each column prevents columns from merging

  const lineBreaks = new Array(numberOfLineBreaks).fill('').map((_, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    "data-class": "line-break",
    style: (0, _extends2.default)({}, lineBreakStyle, {
      order: index + 1
    })
  }, index));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(MasonryRoot, (0, _extends2.default)({
    as: component,
    className: (0, _clsx.default)(classes.root, className),
    ref: handleRef,
    ownerState: ownerState
  }, other, {
    children: [children, lineBreaks]
  }));
});
process.env.NODE_ENV !== "production" ? Masonry.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Number of columns.
   * @default 4
   */
  columns: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])), _propTypes.default.number, _propTypes.default.object, _propTypes.default.string]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * The default number of columns of the component. This is provided for server-side rendering.
   */
  defaultColumns: _propTypes.default.number,

  /**
   * The default height of the component in px. This is provided for server-side rendering.
   */
  defaultHeight: _propTypes.default.number,

  /**
   * The default spacing of the component. Like `spacing`, it is a factor of the theme's spacing. This is provided for server-side rendering.
   */
  defaultSpacing: _propTypes.default.number,

  /**
   * Defines the space between children. It is a factor of the theme's spacing.
   * @default 1
   */
  spacing: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])), _propTypes.default.number, _propTypes.default.object, _propTypes.default.string]),

  /**
   * Allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = Masonry;
exports.default = _default;