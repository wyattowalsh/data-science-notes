declare type NestedRecord<V = any> = {
    [k: string | number]: NestedRecord<V> | V;
};
/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
export declare const assignNestedKeys: <Object_1 = NestedRecord<any>, Value = any>(obj: Object_1, keys: Array<string>, value: Value) => void;
/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */
export declare const walkObjectDeep: <Value, T = Record<string, any>>(obj: T, callback: (keys: Array<string>, value: Value, scope: Record<string, string | number>) => void, shouldSkipPaths?: ((keys: Array<string>) => boolean) | undefined) => void;
/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  basePrefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `basePrefix`: defined by design system.
 *  `prefix`: defined by application
 *
 *   the CSS variable value will be adjusted based on the provided `basePrefix` & `prefix` which can be found in `parsedTheme`.
 *
 * @returns {{ css: Object, vars: Object, parsedTheme: typeof theme }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme), and `parsedTheme` is the cloned version of theme.
 *
 * @example
 * const { css, vars, parsedTheme } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: 'var(--color)' } }
 * }, { prefix: 'foo' })
 *
 * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--foo-color)' }
 * console.log(vars) // { fontSize: '--foo-fontSize', lineHeight: '--foo-lineHeight', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
 * console.log(parsedTheme) // { fontSize: 12, lineHeight: 1.2, palette: { primary: { 500: 'var(--foo-color)' } } }
 */
export default function cssVarsParser<T extends Record<string, any>>(theme: T, options?: {
    prefix?: string;
    basePrefix?: string;
    shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean;
}): {
    css: NestedRecord<string>;
    vars: NestedRecord<string>;
    parsedTheme: T;
};
export {};
