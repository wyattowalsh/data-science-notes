export interface MenuUnstyledClasses {
    root: string;
    listbox: string;
    expanded: string;
}
export declare type MenuUnstyledClassKey = keyof MenuUnstyledClasses;
export declare function getMenuUnstyledUtilityClass(slot: string): string;
declare const menuUnstyledClasses: MenuUnstyledClasses;
export default menuUnstyledClasses;
