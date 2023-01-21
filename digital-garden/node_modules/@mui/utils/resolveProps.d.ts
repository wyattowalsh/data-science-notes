/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
export default function resolveProps<T extends {
    className?: string;
} & Record<string, unknown>>(defaultProps: T, props: T): T;
