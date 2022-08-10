import { put, takeEvery, select, delay } from 'redux-saga/effects';
import * as authActions from '../auth/actions';
import * as actions from './actions';
import { RootState } from '../store';
import registerRequest from '../utils/registerRequest';
import * as I from './interfaces';
import { allActions } from '../allActions';
import { refreshToken } from '../auth/actions';
import { IAuth } from '@finance/types';

const fetchAuthRefresh = function* (data: IAuth.Tokens) {
  yield put(authActions.setTokens(data));
  yield put(actions.setRefreshActionsLoading(false));

  const refreshActions: Array<I.IRefreshAction> = yield select((state: RootState) => state.refreshActions.data);
  for (const item of refreshActions) {
    const action = allActions[item.actionName as keyof typeof allActions];
    yield put(action(item.action.payload as never, item.action.meta as never));
  }

  yield put(refreshToken());
};

const fetchAuthRefreshError = function* (data: { statusCode: number }) {
  yield put(actions.setRefreshActionsLoading(false));
  // Невалидный refresh_token
  if (data.statusCode === 422) {
    yield put(authActions.removeTokens());
    return;
  }
  // Возможно пропала сеть, пробуем востановить через 5 секунд
  yield delay(5000);
  const refreshToken: string = yield select((state: RootState) => state.auth.tokens?.refreshToken);
  yield put(authActions.fetchAuthRefresh({ refreshToken }));
}

export default [
  registerRequest(
    takeEvery,
    authActions.fetchAuthRefresh.type,
    fetchAuthRefresh,
    fetchAuthRefreshError
  )
];
