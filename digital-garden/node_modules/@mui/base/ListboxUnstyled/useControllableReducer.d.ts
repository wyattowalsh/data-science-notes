import { ListboxAction, ListboxReducer, ListboxState, UseListboxStrictProps } from './useListbox.types';
export default function useControllableReducer<TOption>(internalReducer: ListboxReducer<TOption>, externalReducer: ListboxReducer<TOption> | undefined, props: UseListboxStrictProps<TOption>): [ListboxState<TOption>, (action: ListboxAction<TOption>) => void];
