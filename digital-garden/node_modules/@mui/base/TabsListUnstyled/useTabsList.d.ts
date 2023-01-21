import * as React from 'react';
export interface UseTabsListProps {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    ref: React.Ref<unknown>;
}
declare const useTabsList: (props: UseTabsListProps) => {
    isRtl: boolean;
    orientation: "horizontal" | "vertical";
    value: string | number | false;
    processChildren: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | null | undefined;
    getRootProps: (otherHandlers?: Record<string, (event: any) => void> | undefined) => {
        'aria-label': string | undefined;
        'aria-labelledby': string | undefined;
        'aria-orientation': string | null;
        role: string;
        ref: React.Ref<unknown>;
    };
};
export default useTabsList;
