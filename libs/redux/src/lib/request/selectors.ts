import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import * as I from './interfaces';

const requestState = (state: RootState): I.IRequestState => state.request;
type IGetRequest = (name: string, id?: string) => I.IRequestStateItem | {};

export const getRequest: IGetRequest = (name: string, id?: string) =>
  createSelector(requestState, (request: I.IRequestState) => {
    return getStateRequest(request, name, id);
  });

export const getStateRequest = (
  request: I.IRequestState,
  name: string,
  id?: string
): I.IRequestStateItem | null => {
  if (!request.data?.[name]) {
    return null;
  }

  if (id !== undefined) {
    return (request.data[name] as I.IRequestStateIds)[id] || null;
  }

  return (request.data[name] as I.IRequestStateItem) || null;
};
