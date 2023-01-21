import { OverridableComponent } from '@mui/types';
import FormControlUnstyledProps, { FormControlUnstyledOwnProps, FormControlUnstyledTypeMap } from './FormControlUnstyledProps';
declare type NonOptionalOwnerState = 'disabled' | 'error' | 'focused' | 'required';
export declare type FormControlUnstyledOwnerState = Omit<FormControlUnstyledOwnProps, NonOptionalOwnerState> & Required<Pick<FormControlUnstyledProps, NonOptionalOwnerState>> & {
    filled: boolean;
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * *   FormLabel
 * *   FormHelperText
 * *   Input
 * *   InputLabel
 *
 * You can find one composition example below and more going to [the demos](https://mui.com/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `Input` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 *
 * Demos:
 *
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [FormControlUnstyled API](https://mui.com/api/form-control-unstyled/)
 */
declare const FormControlUnstyled: OverridableComponent<FormControlUnstyledTypeMap<{}, "div">>;
export default FormControlUnstyled;
