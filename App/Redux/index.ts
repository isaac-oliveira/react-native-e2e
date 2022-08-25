import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga';

import {AuthReducer} from './Auth';
import {HomeReducer} from './Home';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
});

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type GlobalState = ReturnType<typeof reducer>;
