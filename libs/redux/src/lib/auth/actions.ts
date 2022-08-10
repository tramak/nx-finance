export * from './slice';
import { createAction } from '@reduxjs/toolkit';
import { IAuth } from '@finance/types';

export const refreshToken = createAction('refreshToken');
export const logout = createAction('logout');
export const fetchAuthRefresh = createAction('fetchAuthRefresh', (payload: IAuth.RefreshPayload) => ({ payload }));
