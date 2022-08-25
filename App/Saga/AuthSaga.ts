import {PayloadAction} from '@reduxjs/toolkit';
import {call, put} from 'redux-saga/effects';
import {AuthActions} from '../Redux/Auth';
import {IAuthData} from '../Redux/Auth/Ui';
import {Api} from '../Services/Api';

export function* login(api: Api, action: PayloadAction<IAuthData>) {
  // @ts-ignore
  const response = yield call(api.login, action.payload);
  if (!response.ok) {
    yield put(AuthActions.ui.failure('Erro ao realizar login'));
    return;
  }
  yield put(AuthActions.ui.success());
  yield put(AuthActions.entities.setUser(response.data.name));
}

export function* logout() {
  yield put(AuthActions.entities.clear());
}
