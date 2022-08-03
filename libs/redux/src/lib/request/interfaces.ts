import { IAction } from '@finance/types';

export interface IRequestStateItem {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: string;
}

export interface IRequestStateIds {
  [id: string]: IRequestStateItem;
}

export interface IRequestState {
  data: {
    [action: string]: IRequestStateItem | IRequestStateIds;
  }
}

// slice
export interface ILoadingPayload {
  action: string;
  requestId?: string;
  error?: string;
}
export type ISetLoadingAction = IAction<ILoadingPayload>;
export type ISetSuccessAction = ISetLoadingAction;
export type ISetErrorAction = ISetLoadingAction;
export type IClearAction = IAction<ILoadingPayload | string>;

