export interface ButtonUnstyledClasses {
    root: string;
    active: string;
    disabled: string;
    focusVisible: string;
}
export declare type ButtonUnstyledClassKey = keyof ButtonUnstyledClasses;
export declare function getButtonUnstyledUtilityClass(slot: string): string;
declare const buttonUnstyledClasses: ButtonUnstyledClasses;
export default buttonUnstyledClasses;
