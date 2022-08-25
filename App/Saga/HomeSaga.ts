import {call, put} from 'redux-saga/effects';
import {HomeActions} from '../Redux/Home';
import {Api} from '../Services/Api';

export function* getData(api: Api) {
  // @ts-ignore
  const response = yield call(api.getData);
  if (!response.ok) {
    yield put(HomeActions.ui.failure('Erro ao obter os dados'));
    return;
  }
  yield put(HomeActions.ui.success());
  yield put(HomeActions.entities.setData(response.data));
}
