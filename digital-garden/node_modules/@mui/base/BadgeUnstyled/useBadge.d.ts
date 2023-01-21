import * as React from 'react';
import BadgeUnstyledProps from './BadgeUnstyledProps';
export interface UseBadgeProps {
    anchorOrigin: BadgeUnstyledProps['anchorOrigin'];
    badgeContent: BadgeUnstyledProps['badgeContent'];
    invisible: BadgeUnstyledProps['invisible'];
    max: BadgeUnstyledProps['max'];
    showZero: BadgeUnstyledProps['showZero'];
    variant: BadgeUnstyledProps['variant'];
}
export default function useBadge(props: UseBadgeProps): {
    anchorOrigin: import("./BadgeUnstyledProps").BadgeOrigin;
    badgeContent: React.ReactNode;
    invisible: boolean;
    max: number;
    variant: string;
    displayValue: React.ReactNode;
};
