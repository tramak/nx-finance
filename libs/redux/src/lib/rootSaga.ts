import { all, fork, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import auth from './auth/sagas';

const registeredSagas = [
    ...auth,
];

export default function* rootSata () {
    yield take(REHYDRATE);
    const forkedSagas = registeredSagas.map((saga) => fork(saga));
    yield all(forkedSagas);
}
