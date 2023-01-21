import * as React from 'react';
import { OptionState } from '../ListboxUnstyled';
import { SelectOption } from './useSelect.types';
export interface SelectUnstyledContextType {
    getOptionState: (value: SelectOption<any>) => OptionState;
    getOptionProps: (option: SelectOption<any>) => Record<string, any>;
    listboxRef: React.RefObject<HTMLElement>;
}
export declare const SelectUnstyledContext: React.Context<SelectUnstyledContextType | undefined>;
