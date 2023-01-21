import * as React from 'react';
export interface PickerStaticWrapperClasses {
    /** Styles applied to the root element. */
    root: string;
}
export declare type PickerStaticWrapperClassKey = keyof PickerStaticWrapperClasses;
export declare function getStaticWrapperUtilityClass(slot: string): string;
export declare const pickerStaticWrapperClasses: PickerStaticWrapperClasses;
export interface PickerStaticWrapperProps {
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<PickerStaticWrapperClasses>;
    /**
     * Force static wrapper inner components to be rendered in mobile or desktop mode.
     */
    displayStaticWrapperAs: 'desktop' | 'mobile';
}
declare function PickerStaticWrapper(inProps: PickerStaticWrapperProps): JSX.Element;
export default PickerStaticWrapper;
