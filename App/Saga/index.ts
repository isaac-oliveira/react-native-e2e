import {all, takeLatest} from 'redux-saga/effects';
import {AuthActions} from '../Redux/Auth';
import * as AuthSaga from './AuthSaga';

function* root() {
  yield all([takeLatest(AuthActions.ui.request, AuthSaga.login)]);
  yield all([takeLatest(AuthActions.ui.logout, AuthSaga.logout)]);
}

export default root;
