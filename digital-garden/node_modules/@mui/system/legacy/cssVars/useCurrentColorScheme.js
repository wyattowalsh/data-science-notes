import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { DEFAULT_MODE_STORAGE_KEY, DEFAULT_COLOR_SCHEME_STORAGE_KEY } from './getInitColorSchemeScript';
export function getSystemMode(mode) {
  if (typeof window !== 'undefined' && mode === 'system') {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');

    if (mql.matches) {
      return 'dark';
    }

    return 'light';
  }

  return undefined;
}

function processState(state, callback) {
  if (state.mode === 'light' || state.mode === 'system' && state.systemMode === 'light') {
    return callback('light');
  }

  if (state.mode === 'dark' || state.mode === 'system' && state.systemMode === 'dark') {
    return callback('dark');
  }

  return undefined;
}

export function getColorScheme(state) {
  return processState(state, function (mode) {
    if (mode === 'light') {
      return state.lightColorScheme;
    }

    if (mode === 'dark') {
      return state.darkColorScheme;
    }

    return undefined;
  });
}

function resolveValue(key, defaultValue) {
  if (typeof window === 'undefined') {
    return undefined;
  }

  var value;

  try {
    value = localStorage.getItem(key) || undefined;
  } catch (e) {// Unsupported
  }

  return value || defaultValue;
}

export default function useCurrentColorScheme(options) {
  var _options$defaultMode = options.defaultMode,
      defaultMode = _options$defaultMode === void 0 ? 'light' : _options$defaultMode,
      defaultLightColorScheme = options.defaultLightColorScheme,
      defaultDarkColorScheme = options.defaultDarkColorScheme,
      _options$supportedCol = options.supportedColorSchemes,
      supportedColorSchemes = _options$supportedCol === void 0 ? [] : _options$supportedCol,
      _options$modeStorageK = options.modeStorageKey,
      modeStorageKey = _options$modeStorageK === void 0 ? DEFAULT_MODE_STORAGE_KEY : _options$modeStorageK,
      _options$colorSchemeS = options.colorSchemeStorageKey,
      colorSchemeStorageKey = _options$colorSchemeS === void 0 ? DEFAULT_COLOR_SCHEME_STORAGE_KEY : _options$colorSchemeS;
  var joinedColorSchemes = supportedColorSchemes.join(',');

  var _React$useState = React.useState(function () {
    var initialMode = resolveValue(modeStorageKey, defaultMode);
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme: resolveValue("".concat(colorSchemeStorageKey, "-light")) || defaultLightColorScheme,
      darkColorScheme: resolveValue("".concat(colorSchemeStorageKey, "-dark")) || defaultDarkColorScheme
    };
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var colorScheme = getColorScheme(state);
  var setMode = React.useCallback(function (mode) {
    setState(function (currentState) {
      var newMode = !mode ? defaultMode : mode;

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(modeStorageKey, newMode);
      }

      return _extends({}, currentState, {
        mode: newMode,
        systemMode: getSystemMode(newMode)
      });
    });
  }, [modeStorageKey, defaultMode]);
  var setColorScheme = React.useCallback(function (value) {
    if (!value || typeof value === 'string') {
      if (value && !supportedColorSchemes.includes(value)) {
        console.error("`".concat(value, "` does not exist in `theme.colorSchemes`."));
      } else {
        setState(function (currentState) {
          var newState = _extends({}, currentState);

          if (!value) {
            // reset to default color scheme
            newState.lightColorScheme = defaultLightColorScheme;
            newState.darkColorScheme = defaultDarkColorScheme;
            return newState;
          }

          processState(currentState, function (mode) {
            localStorage.setItem("".concat(colorSchemeStorageKey, "-").concat(mode), value);

            if (mode === 'light') {
              newState.lightColorScheme = value;
            }

            if (mode === 'dark') {
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else if (value.light && !supportedColorSchemes.includes(value.light) || value.dark && !supportedColorSchemes.includes(value.dark)) {
      console.error("`".concat(value, "` does not exist in `theme.colorSchemes`."));
    } else {
      setState(function (currentState) {
        var newState = _extends({}, currentState);

        if (value.light || value.light === null) {
          newState.lightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        }

        if (value.dark || value.dark === null) {
          newState.darkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        }

        return newState;
      });

      if (value.light) {
        localStorage.setItem("".concat(colorSchemeStorageKey, "-light"), value.light);
      }

      if (value.dark) {
        localStorage.setItem("".concat(colorSchemeStorageKey, "-dark"), value.dark);
      }
    }
  }, [colorSchemeStorageKey, supportedColorSchemes, defaultLightColorScheme, defaultDarkColorScheme]);
  var handleMediaQuery = React.useCallback(function (e) {
    if (state.mode === 'system') {
      setState(function (currentState) {
        return _extends({}, currentState, {
          systemMode: e.matches ? 'dark' : 'light'
        });
      });
    }
  }, [state.mode]); // Ref hack to avoid adding handleMediaQuery as a dep

  var mediaListener = React.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React.useEffect(function () {
    var handler = function handler() {
      return mediaListener.current.apply(mediaListener, arguments);
    }; // Always listen to System preference


    var media = window.matchMedia('(prefers-color-scheme: dark)'); // Intentionally use deprecated listener methods to support iOS & old browsers

    media.addListener(handler);
    handler(media);
    return function () {
      return media.removeListener(handler);
    };
  }, []); // Save mode, lightColorScheme & darkColorScheme to localStorage

  React.useEffect(function () {
    if (state.mode) {
      localStorage.setItem(modeStorageKey, state.mode);
    }

    processState(state, function (mode) {
      if (mode === 'light') {
        localStorage.setItem("".concat(colorSchemeStorageKey, "-light"), state.lightColorScheme);
      }

      if (mode === 'dark') {
        localStorage.setItem("".concat(colorSchemeStorageKey, "-dark"), state.darkColorScheme);
      }
    });
  }, [state, colorSchemeStorageKey, modeStorageKey]); // Handle when localStorage has changed

  React.useEffect(function () {
    var handleStorage = function handleStorage(event) {
      var value = event.newValue;

      if (typeof event.key === 'string' && event.key.startsWith(colorSchemeStorageKey) && (!value || joinedColorSchemes.match(value))) {
        // If the key is deleted, value will be null then reset color scheme to the default one.
        if (event.key.endsWith('light')) {
          setColorScheme({
            light: value
          });
        }

        if (event.key.endsWith('dark')) {
          setColorScheme({
            dark: value
          });
        }
      }

      if (event.key === modeStorageKey && (!value || ['light', 'dark', 'system'].includes(value))) {
        setMode(value || defaultMode);
      }
    };

    window.addEventListener('storage', handleStorage);
    return function () {
      return window.removeEventListener('storage', handleStorage);
    };
  }, [setColorScheme, setMode, modeStorageKey, colorSchemeStorageKey, joinedColorSchemes, defaultMode]);
  return _extends({}, state, {
    colorScheme: colorScheme,
    setMode: setMode,
    setColorScheme: setColorScheme
  });
}