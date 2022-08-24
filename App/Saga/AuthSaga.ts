import {PayloadAction} from '@reduxjs/toolkit';
import {delay, put} from 'redux-saga/effects';
import {AuthActions} from '../Redux/Auth';
import {IAuthUi} from '../Redux/Auth/Ui';

export function* login(action: PayloadAction<IAuthUi>) {
  yield delay(3000);
  const {email, password} = action.payload;
  if (!(email.toLowerCase() === 'isaac@gmail.com' && password === 'abc123')) {
    yield put(AuthActions.ui.failure('Erro ao realizar login'));
    return;
  }
  yield put(AuthActions.ui.success());
  yield put(AuthActions.entities.setUser('Isaac'));
}

export function* logout() {
  yield put(AuthActions.entities.clear());
}
