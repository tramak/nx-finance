import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

function *logout() {
  yield put(actions.removeTokens());
}

const init = function* () {
    yield takeEvery(actions.logout.type, logout);
};

export default [
    // registerRequest(
    //     takeEvery,
    //     actions.fetchAuthLogin.type,
    //     fetchAuthLogin,
    //     authLoginError
    // ),
    init,
];
