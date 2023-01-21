import * as React from 'react';
export interface ExportedArrowSwitcherProps {
    /**
     * The components used for each slot.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: {
        LeftArrowButton?: React.ElementType;
        LeftArrowIcon?: React.ElementType;
        RightArrowButton?: React.ElementType;
        RightArrowIcon?: React.ElementType;
    };
    /**
     * The props used for each slot inside.
     * @default {}
     */
    componentsProps?: {
        leftArrowButton?: Record<string, any>;
        rightArrowButton?: Record<string, any>;
    };
    /**
     * Left arrow icon aria-label text.
     */
    leftArrowButtonText?: string;
    /**
     * Right arrow icon aria-label text.
     */
    rightArrowButtonText?: string;
}
interface ArrowSwitcherProps extends ExportedArrowSwitcherProps, Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
    children?: React.ReactNode;
    isLeftDisabled: boolean;
    isLeftHidden?: boolean;
    isRightDisabled: boolean;
    isRightHidden?: boolean;
    onLeftClick: () => void;
    onRightClick: () => void;
}
declare const PickersArrowSwitcher: React.ForwardRefExoticComponent<Omit<ArrowSwitcherProps, "as"> & React.RefAttributes<HTMLDivElement>>;
export default PickersArrowSwitcher;
