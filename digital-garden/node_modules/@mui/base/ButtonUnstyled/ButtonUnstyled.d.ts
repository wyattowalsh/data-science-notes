import * as React from 'react';
import { ButtonUnstyledOwnProps } from './ButtonUnstyled.types';
export interface ButtonUnstyledOwnerState extends ButtonUnstyledOwnProps {
    focusVisible: boolean;
    active: boolean;
}
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Button](https://mui.com/base/react-button/)
 *
 * API:
 *
 * - [ButtonUnstyled API](https://mui.com/base/api/button-unstyled/)
 */
declare const ButtonUnstyled: React.ForwardRefExoticComponent<Pick<ButtonUnstyledOwnProps & Omit<any, keyof ButtonUnstyledOwnProps> & {
    component?: React.ElementType<any> | undefined;
}, string | number | symbol> & React.RefAttributes<any>>;
export default ButtonUnstyled;
