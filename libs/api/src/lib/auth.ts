import agent from './agent/axios';
import { AxiosResponse } from 'axios';
import { IAuth } from '@finance/types';

export const fetchAuthRefresh = (data: IAuth.RefreshPayload): Promise<AxiosResponse<IAuth.RefreshResponseSuccess>> => {
  return agent.post('/auth/refresh', data);
};

export const fetchAuthLogout = (): Promise<AxiosResponse<unknown>> => {
  return agent.post('/auth/logout', {
    refreshToken: localStorage.getItem('refreshToken'),
  });
};

