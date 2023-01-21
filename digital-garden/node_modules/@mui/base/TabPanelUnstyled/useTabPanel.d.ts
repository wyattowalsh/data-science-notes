export interface UseTabPanelProps {
    /**
     * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
     */
    value: number | string;
}
declare const useTabPanel: (props: UseTabPanelProps) => {
    hidden: boolean;
    getRootProps: () => {
        'aria-labelledby': string | null;
        hidden: boolean;
        id: string | null;
    };
};
export default useTabPanel;
