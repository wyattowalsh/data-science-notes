import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { formatMuiErrorMessage as _formatMuiErrorMessage } from "@mui/utils";
import * as React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles } from '@mui/styled-engine';
import { deepmerge, unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import createSpacing from '../createTheme/createSpacing';
import createBreakpoints from '../createTheme/createBreakpoints';
import cssVarsParser from './cssVarsParser';
import ThemeProvider from '../ThemeProvider';
import getInitColorSchemeScript, { DEFAULT_ATTRIBUTE, DEFAULT_MODE_STORAGE_KEY } from './getInitColorSchemeScript';
import useCurrentColorScheme from './useCurrentColorScheme';
import createGetCssVar from './createGetCssVar';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
export default function createCssVarsProvider(options) {
  var _baseTheme$breakpoint;

  var _options$theme = options.theme,
      baseTheme = _options$theme === void 0 ? {} : _options$theme,
      _options$defaultMode = options.defaultMode,
      desisgnSystemMode = _options$defaultMode === void 0 ? 'light' : _options$defaultMode,
      designSystemColorScheme = options.defaultColorScheme,
      _options$disableTrans = options.disableTransitionOnChange,
      designSystemTransitionOnChange = _options$disableTrans === void 0 ? false : _options$disableTrans,
      _options$enableColorS = options.enableColorScheme,
      designSystemEnableColorScheme = _options$enableColorS === void 0 ? true : _options$enableColorS,
      _options$prefix = options.prefix,
      designSystemPrefix = _options$prefix === void 0 ? '' : _options$prefix,
      shouldSkipGeneratingVar = options.shouldSkipGeneratingVar,
      resolveTheme = options.resolveTheme;
  var systemSpacing = createSpacing(baseTheme.spacing);
  var systemBreakpoints = createBreakpoints((_baseTheme$breakpoint = baseTheme.breakpoints) != null ? _baseTheme$breakpoint : {});

  if (!baseTheme.colorSchemes || typeof designSystemColorScheme === 'string' && !baseTheme.colorSchemes[designSystemColorScheme] || _typeof(designSystemColorScheme) === 'object' && !baseTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || _typeof(designSystemColorScheme) === 'object' && !baseTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error("MUI: `".concat(designSystemColorScheme, "` does not exist in `theme.colorSchemes`."));
  }

  var ColorSchemeContext = /*#__PURE__*/React.createContext(undefined);

  var useColorScheme = function useColorScheme() {
    var value = React.useContext(ColorSchemeContext);

    if (!value) {
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `useColorScheme` must be called under <CssVarsProvider />" : _formatMuiErrorMessage(19));
    }

    return value;
  };

  function CssVarsProvider(_ref) {
    var children = _ref.children,
        _ref$theme = _ref.theme,
        themeProp = _ref$theme === void 0 ? {} : _ref$theme,
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === void 0 ? designSystemPrefix : _ref$prefix,
        _ref$modeStorageKey = _ref.modeStorageKey,
        modeStorageKey = _ref$modeStorageKey === void 0 ? DEFAULT_MODE_STORAGE_KEY : _ref$modeStorageKey,
        _ref$attribute = _ref.attribute,
        attribute = _ref$attribute === void 0 ? DEFAULT_ATTRIBUTE : _ref$attribute,
        _ref$defaultMode = _ref.defaultMode,
        defaultMode = _ref$defaultMode === void 0 ? desisgnSystemMode : _ref$defaultMode,
        _ref$defaultColorSche = _ref.defaultColorScheme,
        defaultColorScheme = _ref$defaultColorSche === void 0 ? designSystemColorScheme : _ref$defaultColorSche,
        _ref$disableTransitio = _ref.disableTransitionOnChange,
        disableTransitionOnChange = _ref$disableTransitio === void 0 ? designSystemTransitionOnChange : _ref$disableTransitio,
        _ref$enableColorSchem = _ref.enableColorScheme,
        enableColorScheme = _ref$enableColorSchem === void 0 ? designSystemEnableColorScheme : _ref$enableColorSchem;

    var _baseTheme$colorSchem = baseTheme.colorSchemes,
        baseColorSchemes = _baseTheme$colorSchem === void 0 ? {} : _baseTheme$colorSchem,
        restBaseTheme = _objectWithoutProperties(baseTheme, ["colorSchemes"]);

    var _themeProp$colorSchem = themeProp.colorSchemes,
        colorSchemesProp = _themeProp$colorSchem === void 0 ? {} : _themeProp$colorSchem,
        restThemeProp = _objectWithoutProperties(themeProp, ["colorSchemes"]);

    var hasMounted = React.useRef(false); // eslint-disable-next-line prefer-const

    var _deepmerge = deepmerge(restBaseTheme, restThemeProp),
        _deepmerge$components = _deepmerge.components,
        components = _deepmerge$components === void 0 ? {} : _deepmerge$components,
        mergedTheme = _objectWithoutProperties(_deepmerge, ["components"]);

    var colorSchemes = deepmerge(baseColorSchemes, colorSchemesProp);
    var allColorSchemes = Object.keys(colorSchemes);
    var defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    var defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;

    var _useCurrentColorSchem = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme: defaultLightColorScheme,
      defaultDarkColorScheme: defaultDarkColorScheme,
      modeStorageKey: modeStorageKey,
      defaultMode: defaultMode
    }),
        mode = _useCurrentColorSchem.mode,
        setMode = _useCurrentColorSchem.setMode,
        systemMode = _useCurrentColorSchem.systemMode,
        lightColorScheme = _useCurrentColorSchem.lightColorScheme,
        darkColorScheme = _useCurrentColorSchem.darkColorScheme,
        colorScheme = _useCurrentColorSchem.colorScheme,
        setColorScheme = _useCurrentColorSchem.setColorScheme;

    var resolvedColorScheme = function () {
      if (!colorScheme) {
        // This scope occurs on the server
        if (defaultMode === 'dark') {
          return defaultDarkColorScheme;
        } // use light color scheme, if default mode is 'light' | 'auto'


        return defaultLightColorScheme;
      }

      return colorScheme;
    }();

    var _cssVarsParser = cssVarsParser(mergedTheme, {
      prefix: prefix,
      basePrefix: designSystemPrefix,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar
    }),
        rootCss = _cssVarsParser.css,
        rootVars = _cssVarsParser.vars,
        parsedTheme = _cssVarsParser.parsedTheme;

    mergedTheme = _extends({}, parsedTheme, {
      components: components,
      colorSchemes: colorSchemes,
      prefix: prefix,
      vars: rootVars,
      spacing: themeProp.spacing ? createSpacing(themeProp.spacing) : systemSpacing,
      breakpoints: themeProp.breakpoints ? createBreakpoints(themeProp.breakpoints) : systemBreakpoints,
      getCssVar: createGetCssVar(prefix)
    });
    var styleSheet = {};
    Object.entries(colorSchemes).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          scheme = _ref3[1];

      var _cssVarsParser2 = cssVarsParser(scheme, {
        prefix: prefix,
        basePrefix: designSystemPrefix,
        shouldSkipGeneratingVar: shouldSkipGeneratingVar
      }),
          css = _cssVarsParser2.css,
          vars = _cssVarsParser2.vars,
          parsedScheme = _cssVarsParser2.parsedTheme;

      mergedTheme.vars = deepmerge(mergedTheme.vars, vars);

      if (key === resolvedColorScheme) {
        mergedTheme = _extends({}, mergedTheme, parsedScheme);
      }

      var resolvedDefaultColorScheme = function () {
        if (typeof defaultColorScheme === 'string') {
          return defaultColorScheme;
        }

        if (defaultMode === 'dark') {
          return defaultColorScheme.dark;
        }

        return defaultColorScheme.light;
      }();

      if (key === resolvedDefaultColorScheme) {
        styleSheet[':root'] = css;
      } else {
        styleSheet["[".concat(attribute, "=\"").concat(key, "\"]")] = css;
      }
    });
    React.useEffect(function () {
      if (colorScheme) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        document.documentElement.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute]);
    useEnhancedEffect(function () {
      if (!mode || !enableColorScheme) {
        return undefined;
      }

      var priorColorScheme = document.documentElement.style.getPropertyValue('color-scheme'); // `color-scheme` tells browser to render built-in elements according to its value: `light` or `dark`

      if (mode === 'system') {
        document.documentElement.style.setProperty('color-scheme', systemMode);
      } else {
        document.documentElement.style.setProperty('color-scheme', mode);
      }

      return function () {
        document.documentElement.style.setProperty('color-scheme', priorColorScheme);
      };
    }, [mode, systemMode, enableColorScheme]);
    React.useEffect(function () {
      var timer;

      if (disableTransitionOnChange && hasMounted.current) {
        // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
        var css = document.createElement('style');
        css.appendChild(document.createTextNode(DISABLE_CSS_TRANSITION));
        document.head.appendChild(css); // Force browser repaint

        (function () {
          return window.getComputedStyle(document.body);
        })();

        timer = setTimeout(function () {
          document.head.removeChild(css);
        }, 1);
      }

      return function () {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange]);
    React.useEffect(function () {
      hasMounted.current = true;
      return function () {
        hasMounted.current = false;
      };
    }, []);
    return /*#__PURE__*/_jsxs(ColorSchemeContext.Provider, {
      value: {
        mode: mode,
        setMode: setMode,
        lightColorScheme: lightColorScheme,
        darkColorScheme: darkColorScheme,
        colorScheme: colorScheme,
        setColorScheme: setColorScheme,
        allColorSchemes: allColorSchemes
      },
      children: [/*#__PURE__*/_jsx(GlobalStyles, {
        styles: {
          ':root': rootCss
        }
      }), /*#__PURE__*/_jsx(GlobalStyles, {
        styles: styleSheet
      }), /*#__PURE__*/_jsx(ThemeProvider, {
        theme: resolveTheme ? resolveTheme(mergedTheme) : mergedTheme,
        children: children
      })]
    });
  }

  process.env.NODE_ENV !== "production" ? CssVarsProvider.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: PropTypes.string,

    /**
     * The component tree.
     */
    children: PropTypes.node,

    /**
     * The initial color scheme used.
     */
    defaultColorScheme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * The initial mode used.
     */
    defaultMode: PropTypes.string,

    /**
     * Disable CSS transitions when switching between modes or color schemes
     */
    disableTransitionOnChange: PropTypes.bool,

    /**
     * Indicate to the browser which color scheme is used (light or dark) for rendering built-in UI
     */
    enableColorScheme: PropTypes.bool,

    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: PropTypes.string,

    /**
     * CSS variable prefix.
     */
    prefix: PropTypes.string,

    /**
     * The calculated theme object that will be passed through context.
     */
    theme: PropTypes.object
  } : void 0;
  return {
    CssVarsProvider: CssVarsProvider,
    useColorScheme: useColorScheme,
    getInitColorSchemeScript: getInitColorSchemeScript
  };
}