import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
declare type HTMLDivProps = JSX.IntrinsicElements['div'];
export interface CalendarPickerSkeletonClasses {
    /** Styles applied to the root element. */
    root: string;
    /** Styles applied to the week element. */
    week: string;
    /** Styles applied to the day element. */
    daySkeleton: string;
}
export interface CalendarPickerSkeletonProps extends HTMLDivProps {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CalendarPickerSkeletonClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    ref?: React.Ref<HTMLDivElement>;
}
export declare type CalendarPickerSkeletonClassKey = keyof CalendarPickerSkeletonClasses;
export declare function getCalendarPickerSkeletonUtilityClass(slot: string): string;
export declare const calendarPickerSkeletonClasses: CalendarPickerSkeletonClasses;
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/date-picker/)
 *
 * API:
 *
 * - [CalendarPickerSkeleton API](https://mui.com/api/calendar-picker-skeleton/)
 */
declare function CalendarPickerSkeleton(props: CalendarPickerSkeletonProps): JSX.Element;
declare namespace CalendarPickerSkeleton {
    var propTypes: any;
}
export default CalendarPickerSkeleton;
