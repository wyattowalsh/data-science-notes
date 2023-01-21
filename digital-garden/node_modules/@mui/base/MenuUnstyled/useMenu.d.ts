import * as React from 'react';
import { MenuItemMetadata, MenuItemState, UseMenuParameters } from './useMenu.types';
import { EventHandlers } from '../utils';
export default function useMenu(parameters: UseMenuParameters): {
    registerItem: (id: any, metadata: any) => void;
    unregisterItem: (id: any) => void;
    menuItems: Record<string, MenuItemMetadata>;
    getListboxProps: (otherHandlers?: EventHandlers | undefined) => {
        role: string;
        'aria-activedescendant'?: string | undefined;
        id?: string | undefined;
        onBlur: React.FocusEventHandler<Element>;
        onKeyDown: React.KeyboardEventHandler<Element>;
        tabIndex: number;
        ref: React.Ref<any>;
    };
    getItemState: (id: string) => MenuItemState;
    getItemProps: <TOther extends EventHandlers = {}>(option: string, otherHandlers?: TOther) => import("../ListboxUnstyled").UseListboxOptionSlotProps<TOther>;
    highlightedOption: string | null;
    highlightFirstItem: () => void;
    highlightLastItem: () => void;
};
