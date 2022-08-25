import {all, takeLatest} from 'redux-saga/effects';
import {AuthActions} from '../Redux/Auth';
import {HomeActions} from '../Redux/Home';
import api from '../Services/Api';
import * as AuthSaga from './AuthSaga';
import * as HomeSaga from './HomeSaga';

function* root() {
  yield all([
    takeLatest(AuthActions.ui.request, AuthSaga.login, api),
    takeLatest(AuthActions.ui.logout, AuthSaga.logout),
    takeLatest(HomeActions.ui.request, HomeSaga.getData, api),
  ]);
}

export default root;
