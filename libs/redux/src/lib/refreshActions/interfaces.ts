import { IAction } from '@finance/types';

export interface IRefreshActionsState {
  isLoading: boolean;
  data: Array<IRefreshAction>;
}

export interface IRefreshAction {
  actionName: string;
  action: IAction<any>;
}

// slice
export type IRefreshActionsAddAction = IAction<IRefreshAction>;
export type AetRefreshActionsLoadingAction = IAction<boolean>;
