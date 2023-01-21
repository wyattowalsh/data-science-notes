import * as React from 'react';
import { BaseDatePickerProps } from '../DatePicker/shared';
import { PickerStaticWrapperProps } from '../internal/pickers/wrappers/PickerStaticWrapper';
export interface StaticDatePickerProps<TDate = unknown> extends BaseDatePickerProps<TDate> {
    /**
     * Force static wrapper inner components to be rendered in mobile or desktop mode.
     * @default 'mobile'
     */
    displayStaticWrapperAs?: PickerStaticWrapperProps['displayStaticWrapperAs'];
}
declare type StaticDatePickerComponent = (<TDate>(props: StaticDatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/date-picker/)
 *
 * API:
 *
 * - [StaticDatePicker API](https://mui.com/api/static-date-picker/)
 */
declare const StaticDatePicker: StaticDatePickerComponent;
export default StaticDatePicker;
