/// <reference types="react" />
export interface UseTabProps {
    /**
     * You can provide your own value. Otherwise, we fall back to the child position index.
     */
    value?: number | string;
    /**
     * Callback invoked when new value is being set.
     */
    onChange?: (event: React.SyntheticEvent, value: number | string) => void;
    onClick?: React.MouseEventHandler;
    disabled?: boolean;
    onFocus?: React.FocusEventHandler;
    ref: React.Ref<any>;
}
declare const useTab: (props: UseTabProps) => {
    selected: boolean;
    focusVisible: boolean;
    setFocusVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    disabled: boolean;
    active: boolean;
    getRootProps: (otherHandlers?: Record<string, (event: any) => void> | undefined) => {
        role: string;
        'aria-controls': string | null;
        id: string | null;
        'aria-selected': boolean;
        disabled: boolean;
        onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
        'aria-disabled'?: (boolean | "false" | "true") | undefined;
        tabIndex: number;
        type?: "button" | "reset" | "submit" | undefined;
        onBlur: import("react").FocusEventHandler<Element>;
        onFocus: import("react").FocusEventHandler<Element>;
        onKeyDown: import("react").KeyboardEventHandler<Element>;
        onKeyUp: import("react").KeyboardEventHandler<Element>;
        onMouseDown: import("react").MouseEventHandler<Element>;
        onMouseLeave: import("react").MouseEventHandler<Element>;
        onMouseUp: import("react").MouseEventHandler<Element>;
        ref: import("react").Ref<any>;
    };
};
export default useTab;
