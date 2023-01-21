/// <reference types="react" />
export declare const DEFAULT_MODE_STORAGE_KEY = "mui-mode";
export declare const DEFAULT_COLOR_SCHEME_STORAGE_KEY = "mui-color-scheme";
export declare const DEFAULT_ATTRIBUTE = "data-mui-color-scheme";
export default function getInitColorSchemeScript(options?: {
    enableSystem?: boolean;
    defaultLightColorScheme?: string;
    defaultDarkColorScheme?: string;
    modeStorageKey?: string;
    colorSchemeStorageKey?: string;
    attribute?: string;
}): JSX.Element;
