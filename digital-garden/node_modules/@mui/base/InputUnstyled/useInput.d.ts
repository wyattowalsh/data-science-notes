import * as React from 'react';
import { UseInputProps } from './InputUnstyledProps';
export default function useInput(props: UseInputProps, inputRef?: React.Ref<HTMLInputElement>): {
    disabled: boolean;
    error: boolean;
    focused: boolean;
    formControlContext: import("..").FormControlUnstyledState | undefined;
    getInputProps: (externalProps?: Record<string, unknown> | undefined) => {
        'aria-invalid': true | undefined;
        defaultValue: string | number | readonly string[] | undefined;
        ref: React.Ref<any>;
        value: string | number | readonly string[] | undefined;
        required: boolean;
        disabled: boolean;
    };
    getRootProps: (externalProps?: Record<string, unknown> | undefined) => {
        onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
    };
    required: boolean;
    value: unknown;
};
