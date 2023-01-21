import * as React from 'react';
import { WrapperVariant } from '../wrappers/WrapperVariantContext';
import { DateInputPropsLike } from '../wrappers/WrapperProps';
import { PickerSelectionState } from '../hooks/usePickerState';
import { BasePickerProps, CalendarAndClockProps } from '../typings/BasePicker';
import { AllAvailableViews } from '../typings/Views';
export interface ExportedPickerProps<View extends AllAvailableViews> extends Omit<BasePickerProps<unknown, unknown>, 'value' | 'onChange'>, Omit<CalendarAndClockProps<unknown>, 'onViewChange' | 'openTo' | 'view'> {
    dateRangeIcon?: React.ReactNode;
    /**
     * Callback fired on view change.
     */
    onViewChange?: (view: View) => void;
    /**
     * First view to show.
     */
    openTo: View;
    timeIcon?: React.ReactNode;
    /**
     * Array of views to show.
     */
    views: readonly View[];
}
export interface PickerProps<View extends AllAvailableViews> extends ExportedPickerProps<View> {
    autoFocus?: boolean;
    date: any;
    DateInputProps: DateInputPropsLike;
    isMobileKeyboardViewOpen: boolean;
    onDateChange: (date: any, currentWrapperVariant: WrapperVariant, isFinish?: PickerSelectionState) => void;
    toggleMobileKeyboardView: () => void;
}
export declare const MobileKeyboardInputView: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare function Picker<View extends AllAvailableViews>(props: PickerProps<View>): JSX.Element;
export default Picker;
