import * as React from 'react';
import { BaseTimePickerProps } from '../TimePicker/shared';
import { PickerStaticWrapperProps } from '../internal/pickers/wrappers/PickerStaticWrapper';
export interface StaticTimePickerProps<TDate = unknown> extends BaseTimePickerProps<TDate> {
    /**
     * Force static wrapper inner components to be rendered in mobile or desktop mode.
     * @default 'mobile'
     */
    displayStaticWrapperAs?: PickerStaticWrapperProps['displayStaticWrapperAs'];
}
declare type StaticTimePickerComponent = (<TDate>(props: StaticTimePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Time Picker](https://mui.com/components/time-picker/)
 *
 * API:
 *
 * - [StaticTimePicker API](https://mui.com/api/static-time-picker/)
 */
declare const StaticTimePicker: StaticTimePickerComponent;
export default StaticTimePicker;
