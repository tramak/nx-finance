import { call as callRedux, put, select } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { IResponse, IAction, IMetaData } from '@finance/types';
import { setLoading, setSuccess, setError } from '../request/slice';
import { isClient } from '@finance/utils';
import * as api from '@finance/api';
import { addRefreshAction, setRefreshActionsLoading } from '../refreshActions/slice';
import { RootState } from '../store';
import { fetchAuthRefresh, logout } from '../auth/actions';

export const call = function* (actionName: any, payload?: any, meta?: IMetaData): any {
  const func = api[actionName as keyof typeof api];
  const action: IAction<any> = { type: actionName, payload, meta };
  const resolve = meta?.promiseActions.resolve;
  const reject = meta?.promiseActions.reject;
  const requestId = meta?.request?.id;

  try {
    // Погресс загрузки для server side не делаем
    if (isClient()) {
      yield put(setLoading({ action: actionName, requestId }));
    }

    const data = yield callRedux(func, payload);
    if (resolve) {
      resolve(data);
    }

    if (isClient()) {
      yield put(setSuccess({ action: actionName, requestId }));
    }

    return data;
  } catch(e: AxiosError | unknown) {
    const axiosError = e as AxiosError;
    let error = '';
    if (axiosError.isAxiosError) {
      const data = axiosError.response?.data as IResponse.ResponseError;

      if (
        axiosError.response?.status === 401
        && data.error === 'Unauthorized'
      ) {
        if (actionName !== 'fetchAuthRefresh') {
          const isLoadingRefresh: boolean = yield select((state: RootState) => state.refreshActions.isLoading);
          const refreshToken: string = yield select((state: RootState) => state.auth.tokens?.refreshToken);
          yield put(addRefreshAction({ actionName, action }));

          if (!isLoadingRefresh) {
            yield put(setRefreshActionsLoading(true));
            yield put(fetchAuthRefresh({ refreshToken }));
          }
        } else {
          yield put(logout());
        }
        return;
      }

      if (data.messages?.length) {
        error = data.messages[0].message;
      }

      if (reject) {
        reject(data?.messages);
      }
    }

    if (isClient()) {
      yield put(setError({ action: actionName, error, requestId }));
    }

    throw e;
  }
};
