import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import { formatMuiErrorMessage as _formatMuiErrorMessage } from "@mui/utils";
const _excluded = ["colorSchemes"],
      _excluded2 = ["colorSchemes"],
      _excluded3 = ["components"];
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
export const DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
export default function createCssVarsProvider(options) {
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
  const systemSpacing = createSpacing(baseTheme.spacing);
  const systemBreakpoints = createBreakpoints((_baseTheme$breakpoint = baseTheme.breakpoints) != null ? _baseTheme$breakpoint : {});

  if (!baseTheme.colorSchemes || typeof designSystemColorScheme === 'string' && !baseTheme.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === 'object' && !baseTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === 'object' && !baseTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error(`MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
  }

  const ColorSchemeContext = /*#__PURE__*/React.createContext(undefined);

  const useColorScheme = () => {
    const value = React.useContext(ColorSchemeContext);

    if (!value) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`useColorScheme\` must be called under <CssVarsProvider />` : _formatMuiErrorMessage(19));
    }

    return value;
  };

  function CssVarsProvider({
    children,
    theme: themeProp = {},
    prefix = designSystemPrefix,
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
    defaultMode = desisgnSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    enableColorScheme = designSystemEnableColorScheme
  }) {
    const {
      colorSchemes: baseColorSchemes = {}
    } = baseTheme,
          restBaseTheme = _objectWithoutPropertiesLoose(baseTheme, _excluded);

    const {
      colorSchemes: colorSchemesProp = {}
    } = themeProp,
          restThemeProp = _objectWithoutPropertiesLoose(themeProp, _excluded2);

    const hasMounted = React.useRef(false); // eslint-disable-next-line prefer-const

    let _deepmerge = deepmerge(restBaseTheme, restThemeProp),
        {
      components = {}
    } = _deepmerge,
        mergedTheme = _objectWithoutPropertiesLoose(_deepmerge, _excluded3);

    const colorSchemes = deepmerge(baseColorSchemes, colorSchemesProp);
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
    } = useCurrentColorScheme({
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
    } = cssVarsParser(mergedTheme, {
      prefix,
      basePrefix: designSystemPrefix,
      shouldSkipGeneratingVar
    });
    mergedTheme = _extends({}, parsedTheme, {
      components,
      colorSchemes,
      prefix,
      vars: rootVars,
      spacing: themeProp.spacing ? createSpacing(themeProp.spacing) : systemSpacing,
      breakpoints: themeProp.breakpoints ? createBreakpoints(themeProp.breakpoints) : systemBreakpoints,
      getCssVar: createGetCssVar(prefix)
    });
    const styleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css,
        vars,
        parsedTheme: parsedScheme
      } = cssVarsParser(scheme, {
        prefix,
        basePrefix: designSystemPrefix,
        shouldSkipGeneratingVar
      });
      mergedTheme.vars = deepmerge(mergedTheme.vars, vars);

      if (key === resolvedColorScheme) {
        mergedTheme = _extends({}, mergedTheme, parsedScheme);
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
    useEnhancedEffect(() => {
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
    return /*#__PURE__*/_jsxs(ColorSchemeContext.Provider, {
      value: {
        mode,
        setMode,
        lightColorScheme,
        darkColorScheme,
        colorScheme,
        setColorScheme,
        allColorSchemes
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
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}