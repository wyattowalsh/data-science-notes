/// <reference types="react" />
export declare type EventHandlers = Record<string, React.EventHandler<any>>;
export declare type WithOptionalOwnerState<T extends {
    ownerState: unknown;
}> = Omit<T, 'ownerState'> & Partial<Pick<T, 'ownerState'>>;
