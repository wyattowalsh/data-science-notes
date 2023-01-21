import * as React from 'react';
import FormControlUnstyledProps from './FormControlUnstyledProps';
declare type ContextFromPropsKey = 'disabled' | 'error' | 'onChange' | 'required' | 'value';
export interface FormControlUnstyledState extends Pick<FormControlUnstyledProps, ContextFromPropsKey> {
    filled: boolean;
    focused: boolean;
    onBlur: () => void;
    onFocus: () => void;
    registerEffect: () => void;
}
/**
 * @ignore - internal component.
 */
declare const FormControlUnstyledContext: React.Context<FormControlUnstyledState | undefined>;
export default FormControlUnstyledContext;
