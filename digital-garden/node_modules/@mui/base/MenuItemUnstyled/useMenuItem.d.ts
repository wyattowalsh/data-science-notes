import * as React from 'react';
import { UseMenuItemParameters } from './useMenuItem.types';
export default function useMenuItem(props: UseMenuItemParameters): {
    getRootProps: (other?: Record<string, any> | undefined) => {
        role: string;
        'aria-disabled'?: (boolean | "false" | "true") | undefined;
        disabled?: boolean | undefined;
        tabIndex: number;
        type?: "button" | "reset" | "submit" | undefined;
        onBlur: React.FocusEventHandler<Element>;
        onFocus: React.FocusEventHandler<Element>;
        onKeyDown: React.KeyboardEventHandler<Element>;
        onKeyUp: React.KeyboardEventHandler<Element>;
        onMouseDown: React.MouseEventHandler<Element>;
        onMouseLeave: React.MouseEventHandler<Element>;
        onMouseUp: React.MouseEventHandler<Element>;
        ref: React.Ref<any>;
    };
    itemState: null;
    focusVisible: boolean;
} | {
    getRootProps: (other?: Record<string, any> | undefined) => {
        tabIndex: any;
        id: any;
        role: string;
        'aria-disabled'?: (boolean | "false" | "true") | undefined;
        disabled?: boolean | undefined;
        type?: "button" | "reset" | "submit" | undefined;
        onBlur: React.FocusEventHandler<Element>;
        onFocus: React.FocusEventHandler<Element>;
        onKeyDown: React.KeyboardEventHandler<Element>;
        onKeyUp: React.KeyboardEventHandler<Element>;
        onMouseDown: React.MouseEventHandler<Element>;
        onMouseLeave: React.MouseEventHandler<Element>;
        onMouseUp: React.MouseEventHandler<Element>;
        ref: React.Ref<any>;
    };
    itemState: import("../MenuUnstyled").MenuItemState | undefined;
    focusVisible: boolean;
};
