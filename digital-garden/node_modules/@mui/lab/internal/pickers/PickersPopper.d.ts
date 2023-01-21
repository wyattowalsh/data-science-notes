import * as React from 'react';
import { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { PopperProps as MuiPopperProps } from '@mui/material/Popper';
import { TrapFocusProps as MuiTrapFocusProps } from '@mui/material/Unstable_TrapFocus';
import { TransitionProps as MuiTransitionProps } from '@mui/material/transitions';
export interface ExportedPickerPaperProps {
    /**
     * If `true`, it shows the clear action in the picker dialog.
     * @default false
     */
    clearable?: boolean;
    /**
     * Clear text message.
     * @default 'Clear'
     */
    clearText?: React.ReactNode;
    /**
     * Paper props passed down to [Paper](https://mui.com/api/paper/) component.
     */
    PaperProps?: Partial<MuiPaperProps>;
}
export interface ExportedPickerPopperProps {
    /**
     * Popper props passed down to [Popper](https://mui.com/api/popper/) component.
     */
    PopperProps?: Partial<MuiPopperProps>;
    /**
     * Custom component for popper [Transition](https://mui.com/components/transitions/#transitioncomponent-prop).
     */
    TransitionComponent?: React.JSXElementConstructor<MuiTransitionProps>;
}
export interface PickerPopperProps extends ExportedPickerPopperProps, ExportedPickerPaperProps {
    role: 'tooltip' | 'dialog';
    TrapFocusProps?: Partial<MuiTrapFocusProps>;
    anchorEl: MuiPopperProps['anchorEl'];
    open: MuiPopperProps['open'];
    containerRef?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
    onClose: () => void;
    onBlur?: () => void;
    onClear?: () => void;
}
declare const PickersPopper: (props: PickerPopperProps) => JSX.Element;
export default PickersPopper;
