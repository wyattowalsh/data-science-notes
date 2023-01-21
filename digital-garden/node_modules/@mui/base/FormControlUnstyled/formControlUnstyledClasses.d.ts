export interface FormControlUnstyledClasses {
    /** Class applied to the root element. */
    root: string;
    /** Class applied to the root element if `disabled={true}`. */
    disabled: string;
}
export declare type FormControlUnstyledClassKey = keyof FormControlUnstyledClasses;
export declare function getFormControlUnstyledUtilityClasses(slot: string): string;
declare const formControlUnstyledClasses: FormControlUnstyledClasses;
export default formControlUnstyledClasses;
