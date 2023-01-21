"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DISABLE_CSS_TRANSITION = void 0;
exports.default = createCssVarsProvider;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _utils = require("@mui/utils");

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledEngine = require("@mui/styled-engine");

var _createSpacing = _interopRequireDefault(require("../createTheme/createSpacing"));

var _createBreakpoints = _interopRequireDefault(require("../createTheme/createBreakpoints"));

var _cssVarsParser = _interopRequireDefault(require("./cssVarsParser"));

var _ThemeProvider = _interopRequireDefault(require("../ThemeProvider"));

var _getInitColorSchemeScript = _interopRequireWildcard(require("./getInitColorSchemeScript"));

var _useCurrentColorScheme = _interopRequireDefault(require("./useCurrentColorScheme"));

var _createGetCssVar = _interopRequireDefault(require("./createGetCssVar"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["colorSchemes"],
      _excluded2 = ["colorSchemes"],
      _excluded3 = ["components"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
exports.DISABLE_CSS_TRANSITION = DISABLE_CSS_TRANSITION;

function createCssVarsProvider(options) {
  var _baseTheme$breakpoint;

  const {
    theme: baseTheme = {},
    defaultMode: desisgnSystemMode = 'light',
    defaultColorScheme: designSystemColorScheme,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    enableColorScheme: designSystemEnableColorScheme = true,
    prefix: designSystemPrefix = '',
    shouldSkipGeneratingVar,
    resolveTheme
  } = options;
  const systemSpacing = (0, _createSpacing.default)(baseTheme.spacing);
  const systemBreakpoints = (0, _createBreakpoints.default)((_baseTheme$breakpoint = baseTheme.breakpoints) != null ? _baseTheme$breakpoint : {});

  if (!baseTheme.colorSchemes || typeof designSystemColorScheme === 'string' && !baseTheme.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === 'object' && !baseTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === 'object' && !baseTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error(`MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
  }

  const ColorSchemeContext = /*#__PURE__*/React.createContext(undefined);

  const useColorScheme = () => {
    const value = React.useContext(ColorSchemeContext);

    if (!value) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`useColorScheme\` must be called under <CssVarsProvider />` : (0, _utils.formatMuiErrorMessage)(19));
    }

    return value;
  };

  function CssVarsProvider({
    children,
    theme: themeProp = {},
    prefix = designSystemPrefix,
    modeStorageKey = _getInitColorSchemeScript.DEFAULT_MODE_STORAGE_KEY,
    attribute = _getInitColorSchemeScript.DEFAULT_ATTRIBUTE,
    defaultMode = desisgnSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    enableColorScheme = designSystemEnableColorScheme
  }) {
    const {
      colorSchemes: baseColorSchemes = {}
    } = baseTheme,
          restBaseTheme = (0, _objectWithoutPropertiesLoose2.default)(baseTheme, _excluded);
    const {
      colorSchemes: colorSchemesProp = {}
    } = themeProp,
          restThemeProp = (0, _objectWithoutPropertiesLoose2.default)(themeProp, _excluded2);
    const hasMounted = React.useRef(false); // eslint-disable-next-line prefer-const

    let _deepmerge = (0, _utils.deepmerge)(restBaseTheme, restThemeProp),
        {
      components = {}
    } = _deepmerge,
        mergedTheme = (0, _objectWithoutPropertiesLoose2.default)(_deepmerge, _excluded3);

    const colorSchemes = (0, _utils.deepmerge)(baseColorSchemes, colorSchemesProp);
    const allColorSchemes = Object.keys(colorSchemes);
    const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
    const {
      mode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme,
      setColorScheme
    } = (0, _useCurrentColorScheme.default)({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      defaultMode
    });

    const resolvedColorScheme = (() => {
      if (!colorScheme) {
        // This scope occurs on the server
        if (defaultMode === 'dark') {
          return defaultDarkColorScheme;
        } // use light color scheme, if default mode is 'light' | 'auto'


        return defaultLightColorScheme;
      }

      return colorScheme;
    })();

    const {
      css: rootCss,
      vars: rootVars,
      parsedTheme
    } = (0, _cssVarsParser.default)(mergedTheme, {
      prefix,
      basePrefix: designSystemPrefix,
      shouldSkipGeneratingVar
    });
    mergedTheme = (0, _extends2.default)({}, parsedTheme, {
      components,
      colorSchemes,
      prefix,
      vars: rootVars,
      spacing: themeProp.spacing ? (0, _createSpacing.default)(themeProp.spacing) : systemSpacing,
      breakpoints: themeProp.breakpoints ? (0, _createBreakpoints.default)(themeProp.breakpoints) : systemBreakpoints,
      getCssVar: (0, _createGetCssVar.default)(prefix)
    });
    const styleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css,
        vars,
        parsedTheme: parsedScheme
      } = (0, _cssVarsParser.default)(scheme, {
        prefix,
        basePrefix: designSystemPrefix,
        shouldSkipGeneratingVar
      });
      mergedTheme.vars = (0, _utils.deepmerge)(mergedTheme.vars, vars);

      if (key === resolvedColorScheme) {
        mergedTheme = (0, _extends2.default)({}, mergedTheme, parsedScheme);
      }

      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === 'string') {
          return defaultColorScheme;
        }

        if (defaultMode === 'dark') {
          return defaultColorScheme.dark;
        }

        return defaultColorScheme.light;
      })();

      if (key === resolvedDefaultColorScheme) {
        styleSheet[':root'] = css;
      } else {
        styleSheet[`[${attribute}="${key}"]`] = css;
      }
    });
    React.useEffect(() => {
      if (colorScheme) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        document.documentElement.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute]);
    (0, _utils.unstable_useEnhancedEffect)(() => {
      if (!mode || !enableColorScheme) {
        return undefined;
      }

      const priorColorScheme = document.documentElement.style.getPropertyValue('color-scheme'); // `color-scheme` tells browser to render built-in elements according to its value: `light` or `dark`

      if (mode === 'system') {
        document.documentElement.style.setProperty('color-scheme', systemMode);
      } else {
        document.documentElement.style.setProperty('color-scheme', mode);
      }

      return () => {
        document.documentElement.style.setProperty('color-scheme', priorColorScheme);
      };
    }, [mode, systemMode, enableColorScheme]);
    React.useEffect(() => {
      let timer;

      if (disableTransitionOnChange && hasMounted.current) {
        // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
        const css = document.createElement('style');
        css.appendChild(document.createTextNode(DISABLE_CSS_TRANSITION));
        document.head.appendChild(css); // Force browser repaint

        (() => window.getComputedStyle(document.body))();

        timer = setTimeout(() => {
          document.head.removeChild(css);
        }, 1);
      }

      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange]);
    React.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ColorSchemeContext.Provider, {
      value: {
        mode,
        setMode,
        lightColorScheme,
        darkColorScheme,
        colorScheme,
        setColorScheme,
        allColorSchemes
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styledEngine.GlobalStyles, {
        styles: {
          ':root': rootCss
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledEngine.GlobalStyles, {
        styles: styleSheet
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeProvider.default, {
        theme: resolveTheme ? resolveTheme(mergedTheme) : mergedTheme,
        children: children
      })]
    });
  }

  process.env.NODE_ENV !== "production" ? CssVarsProvider.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: _propTypes.default.string,

    /**
     * The component tree.
     */
    children: _propTypes.default.node,

    /**
     * The initial color scheme used.
     */
    defaultColorScheme: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

    /**
     * The initial mode used.
     */
    defaultMode: _propTypes.default.string,

    /**
     * Disable CSS transitions when switching between modes or color schemes
     */
    disableTransitionOnChange: _propTypes.default.bool,

    /**
     * Indicate to the browser which color scheme is used (light or dark) for rendering built-in UI
     */
    enableColorScheme: _propTypes.default.bool,

    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: _propTypes.default.string,

    /**
     * CSS variable prefix.
     */
    prefix: _propTypes.default.string,

    /**
     * The calculated theme object that will be passed through context.
     */
    theme: _propTypes.default.object
  } : void 0;
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript: _getInitColorSchemeScript.default
  };
}